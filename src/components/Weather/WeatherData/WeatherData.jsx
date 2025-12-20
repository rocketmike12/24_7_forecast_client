import { useContext, useEffect, useState } from "react";

import { LoadingContext } from "../../../contexts/LoadingContext";
import { AuthContext } from "../../../contexts/AuthContext";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import { toast } from "react-toastify";

import { debounce } from "lodash";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { HourlyForecast } from "./HourlyForecast";

import { WeeklyForecast } from "./WeeklyForecast";

import { FaHeart } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { PiThermometerHotLight } from "react-icons/pi";
import { PiThermometerColdLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import styles from "./WeatherData.module.scss";

Chart.register(CategoryScale);

export const WeatherData = function ({ place, addFavorite, delFavorite, closeForecast }) {
	const { setIsWeatherLoading } = useContext(LoadingContext);

	const { favorites, setFavorites } = useContext(AuthContext);

	const [weather, setWeather] = useState(null);

	const getWeather = async function () {
		try {
			const { data } = await weatherApi.get("/weather", { params: { q: place } });
			setWeather(data);
		} catch (err) {
			if (err.status === 404) {
				toast.error("city not found", { toastId: "cityNotFound" });
			}

			closeForecast();

			// console.error(err)
		}
	};

	const [forecast, setForecast] = useState(null);

	const getForecast = async function () {
		const { data } = await weatherApi.get("/forecast", { params: { q: place } });
		setForecast(data);
	};

	const handleAddFavorite = debounce(function (e) {
		if (favorites.includes(place)) return delFavorite(place);
		addFavorite(place);
	}, 100);

	useEffect(() => {
		setIsWeatherLoading(!Boolean(weather !== null && forecast !== null));
	}, [weather, forecast]);

	useEffect(() => {
		setIsWeatherLoading(true);
		getWeather();
		getForecast();
	}, [place]);

	return (
		<>
			<div className={styles["weather-data"]}>
				{weather !== null && (
					<>
						<div className={styles["weather-data__location"]}>
							<button onClick={closeForecast} className={styles["weather-data__location__back-button"]}>
								<MdArrowBackIosNew />
							</button>

							<h2 className={styles["weather-data__location__city"]}>{`${weather.name}, ${weather.sys.country}`}</h2>

							<button onClick={handleAddFavorite} className={styles["weather-data__location__favorite-button"]}>
								{favorites.includes(place) ? <FaHeart /> : <FaRegHeart />}
							</button>
						</div>

						<ul className={styles["weather-data__list"]}>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Feels like</h3>
								<p className={styles["weather-data__list__data"]}>{weather.main.feels_like}</p>
								{weather.main.feels_like >= 20 ? <PiThermometerHotLight /> : <PiThermometerColdLight />}
							</li>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Min °C</h3>
								<p className={styles["weather-data__list__data"]}>{weather.main.temp_min}°C</p>
								<h3 className={styles["weather-data__list__title"]}>Max °C</h3>
								<p className={styles["weather-data__list__data"]}>{weather.main.temp_max}°C</p>
							</li>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Humidity</h3>
								<p className={styles["weather-data__list__data"]}>{weather.main.humidity}%</p>
								<WiHumidity />
							</li>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Pressure</h3>
								<p className={styles["weather-data__list__data"]}>{weather.main.pressure} Pa</p>
								<WiBarometer />
							</li>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Wind speed</h3>
								<p className={styles["weather-data__list__data"]}>{weather.wind.speed} m/s</p>
								<FaWind />
							</li>
							<li className={styles["weather-data__list__item"]}>
								<h3 className={styles["weather-data__list__title"]}>Visibility</h3>
								<p className={styles["weather-data__list__data"]}>{weather.visibility}</p>
								<FaRegEye />
							</li>
						</ul>
					</>
				)}

				{forecast !== null && (
					<>
						<div className={styles["weather-data__hourly"]}>
							<h2 className={styles["weather-data__hourly__title"]}>5-day temperature forecast</h2>
							<HourlyForecast data={forecast.list} />
						</div>

						<div className={styles["weather-data__weekly"]}>
							<WeeklyForecast data={forecast.list} />
						</div>
					</>
				)}
			</div>
		</>
	);
};

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../contexts/AuthContext";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { HourlyForecast } from "./HourlyForecast";

import { WeeklyForecast } from "./WeeklyForecast";

import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiThermometerHotLight } from "react-icons/pi";
import { PiThermometerColdLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";

import styles from "./WeatherData.module.scss";

Chart.register(CategoryScale);

export const WeatherData = function ({ place, addFavorite }) {
	const { favorites, setFavorites } = useContext(AuthContext);

	const [weather, setWeather] = useState(null);

	const getWeather = async function () {
		const { data } = await weatherApi.get("/weather", { params: { q: place } });
		setWeather(data);
	};

	const [forecast, setForecast] = useState(null);

	const getForecast = async function () {
		const { data } = await weatherApi.get("/forecast", { params: { q: place } });
		setForecast(data);
	};

	const handleAddFavorite = function (e) {
		if (favorites.includes(place)) return alert(`${place} is already in favorites`);
		addFavorite(place);
	};

	useEffect(() => {
		getWeather();
		getForecast();
	}, [place]);

	return (
		<>
			{weather && (
				<>
					<div className={styles["weather-data__location"]}>
						<p className={styles["weather-data__location__city"]}>{weather.name}</p>
						<p className={styles["weather-data__location__country"]}>{weather.sys.country}</p>

						<button onClick={handleAddFavorite} className={styles["weather__card__favorite-button"]}>
							{favorites.includes(place) ? <FaHeart /> : <FaRegHeart />}
						</button>
					</div>

					<ul className={styles["weather-data"]}>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Feels like</h3>
							<p>{weather.main.feels_like}</p>
							{weather.main.feels_like >= 20 ? <PiThermometerHotLight /> : <PiThermometerColdLight />}
						</li>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Min °C</h3>
							<p>{weather.main.temp_min}°C</p>
							<h3 className={styles["weather-data__title"]}>Max °C</h3>
							<p>{weather.main.temp_max}°C</p>
						</li>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Humidity</h3>
							<p>{weather.main.humidity}%</p>
							<WiHumidity />
						</li>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Pressure</h3>
							<p>{weather.main.pressure} Pa</p>
							<WiHumidity />
						</li>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Wind speed</h3>
							<p>{weather.wind.speed} m/s</p>
							<WiBarometer />
						</li>
						<li className={styles["weather-data__item"]}>
							<h3 className={styles["weather-data__title"]}>Visibility</h3>
							<p>{weather.visibility}</p>
							<FaRegEye />
						</li>
					</ul>
				</>
			)}

			{forecast && (
				<>
					<div className={styles["hourly"]}>
						<h2 className={styles["hourly__title"]}>5-day temperature forecast</h2>
						<HourlyForecast data={forecast.list} />
					</div>

					<div className={styles["forecast"]}>
						<WeeklyForecast data={forecast.list} />
					</div>
				</>
			)}
		</>
	);
};

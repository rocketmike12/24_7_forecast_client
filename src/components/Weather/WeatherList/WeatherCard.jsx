import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import { IoReload } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

import { WeatherIcon } from "./WeatherIcon";

import styles from "./WeatherCard.module.scss";

export const WeatherCard = function ({ openForecast, closeForecast, delFavorite, place }) {
	const [date, setDate] = useState(new Date());

	const [weather, setWeather] = useState(null);

	const getWeather = async function () {
		const { data } = await weatherApi.get("/weather", { params: { q: place } });
		setWeather(data);
		setDate(new Date());
	};

	const handleForecast = function (e) {
		openForecast(place);
	};

	const handleDelFavorite = function (e) {
		delFavorite(place);
	};

	useEffect(() => {
		getWeather();
	}, []);

	return weather ? (
		<>
			<li>
				<div className={styles["weather__card__location"]}>
					<p className={styles["weather__card__location__city"]}>{weather.name}</p>
					<p className={styles["weather__card__location__country"]}>{weather.sys.country}</p>
				</div>

				<p className={styles["weather__card__time"]}>{`${date.toLocaleTimeString("en-GB", { hour: "numeric" })}:${date.toLocaleTimeString("en-GB", { minute: "numeric" })}`}</p>

				<div className={styles["weather__card__date"]}>
					<p
						className={styles["weather__card__date__date"]}
					>{`${date.toLocaleDateString("en-GB", { day: "numeric" })}.${date.toLocaleDateString("en-GB", { month: "numeric" })}.${date.toLocaleDateString("en-GB", { year: "numeric" })} `}</p>
					<p className={styles["weather__card__date__day"]}>{date.toLocaleDateString("en-GB", { weekday: "long" })}</p>
				</div>

				<WeatherIcon icon={weather.weather[0].icon} />

				<p className={styles["weather__card__temperature"]}>{Math.floor(weather.main.temp)}°C</p>

				<div className={styles["weather__card__button-wrap"]}>
					<button className={styles["weather__card__update-button"]}>
						<IoReload />
					</button>
					<button className={styles["weather__card__favorite-button"]}>
						<FaHeart />
					</button>
					<button onClick={handleForecast} className={styles["weather__card__forecast-button"]}>
						Forecast
					</button>
					<button onClick={handleDelFavorite} className={styles["weather__card__delete-button"]}>
						<FaRegTrashCan />
					</button>
				</div>
			</li>
		</>
	) : (
		<></>
	);
};

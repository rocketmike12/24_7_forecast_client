import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import { IoReload } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

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

	const getTime = function () {
		const pad = (n) => String(n).padStart(2, "0");

		return `${pad(date.toLocaleTimeString("en-GB", { hour: "numeric" }))}:${pad(date.toLocaleTimeString("en-GB", { minute: "numeric" }))}`;
	};

	const getDate = function () {
		const pad = (n) => String(n).padStart(2, "0");

		return `${pad(date.toLocaleDateString("en-GB", { day: "numeric" }))}.${pad(date.toLocaleDateString("en-GB", { month: "numeric" }))}.${date.toLocaleDateString("en-GB", { year: "numeric" })} `;
	};

	useEffect(() => {
		getWeather();
	}, []);

	return weather ? (
		<>
			<li className={styles["weather-card"]}>
				<div className={styles["weather-card__location"]}>
					<p className={styles["weather-card__location__city"]}>{weather.name}</p>
					<p className={styles["weather-card__location__country"]}>{weather.sys.country}</p>
				</div>

				<p className={styles["weather-card__time"]}>{getTime()}</p>

				<div className={styles["weather-card__date"]}>
					<p className={styles["weather-card__date__date"]}>{getDate()}</p>
					<p className={styles["weather-card__date__day"]}>{date.toLocaleDateString("en-GB", { weekday: "long" })}</p>
				</div>

				<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className={styles["weather-card__img"]} />

				<p className={styles["weather-card__temperature"]}>{Math.floor(weather.main.temp)}°C</p>

				<div className={styles["weather-card__button-wrap"]}>
					<button onClick={getWeather} className={styles["weather-card__update-button"]}>
						<IoReload />
					</button>
					<button onClick={handleForecast} className={styles["weather-card__forecast-button"]}>
						Forecast
					</button>
					<button onClick={handleDelFavorite} className={styles["weather-card__delete-button"]}>
						<FaRegTrashCan />
					</button>
				</div>
			</li>
		</>
	) : (
		<></>
	);
};

import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import { WeatherIcon } from "../WeatherIcon";

import styles from "./WeatherData.module.scss";

export const WeatherData = function ({ place }) {
	const [weather, setWeather] = useState(null);

	const getWeather = async function () {
		const { data } = await weatherApi.get("/weather", { params: { q: place } });
		setWeather(data);
		setDate(new Date());
	};

	const [forecast, setForecast] = useState(null);

	const getForecast = async function () {
		const { data } = await weatherApi.get("/forecast", { params: { q: place } });
		setForecast(data);
	};

	useEffect(() => {
		getWeather();
		getForecast();
	}, []);

	return (
		<>
			{weather && (
				<ul className={styles["weather-data"]}>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Feels like</h3>
						{weather.main.feels_like}
						<WeatherIcon />
					</li>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Min °C</h3>
						<p>{weather.main.temp_min}°C</p>
						<h3 className="weather-data__title">Max °C</h3>
						<p>{weather.main.temp_max}°C</p>
					</li>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Humidity</h3>
						<p>{weather.main.humidity}%</p>
						<WeatherIcon />
					</li>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Pressure</h3>
						<p>{weather.main.pressure} Pa</p>
						<WeatherIcon />
					</li>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Wind speed</h3>
						<p>{weather.wind.speed} m/s</p>
						<WeatherIcon />
					</li>
					<li className={styles["weather-data__item"]}>
						<h3 className="weather-data__title">Visibility</h3>
						<p>{weather.visibility}</p>
						<WeatherIcon />
					</li>
				</ul>
			)}

			{forecast && (
				<>
					<div className={styles["hourly"]}>
						<canvas></canvas>
					</div>

					<div className={styles["forecast"]}>
						<ul className={styles["forecast__list"]}></ul>
					</div>
				</>
			)}
		</>
	);
};

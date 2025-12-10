import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import { IoReload } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";

import { WeatherIcon } from "./WeatherIcon";

import styles from "./WeatherCard.module.scss";

export const WeatherCard = function ({ place }) {
	const [date, setDate] = useState(new Date());

	const [weather, setWeather] = useState(null);

	const getWeather = async function () {
		const { data } = await weatherApi.get("", { params: { q: place } });
		setWeather(data);
		setDate(new Date());
	};

	useEffect(() => {
		getWeather();
	}, []);

	return weather ? (
		<>
			<li>
				<div className="weather__card__location">
					<p className="weather__card__location__city">{weather.name}</p>
					<p className="weather__card__location__country"></p>
				</div>

				<p className="weather__card__time">{`${date.toLocaleTimeString("en-GB", { hour: "numeric" })}:${date.toLocaleTimeString("en-GB", { minute: "numeric" })}`}</p>

				<p className="weather__card__hourly-title">Hourly forecast</p>

				<div className="weather__card__date">
					<p className="weather__card__date__date">{`${date.toLocaleDateString("en-GB", { day: "numeric" })}.${date.toLocaleDateString("en-GB", { month: "numeric" })}.${date.toLocaleDateString("en-GB", { year: "numeric" })} `}</p>
					<p className="weather__card__date__day">{date.toLocaleDateString("en-GB", { weekday: "long" })}</p>
				</div>

				<WeatherIcon icon={weather.weather[0].icon} />

				<p className="weather__card__temperature">{Math.floor(weather.main.temp)}°C</p>

				<div className="weather__card__button-wrap">
					<button className="weather__card__update-button">
						<IoReload />
					</button>
					<button className="weather__card__favorite-button">
						<CiHeart />
					</button>
					<button className="weather__card__open-button">See more</button>
					<button className="weather__card__delete-button">
						<FaRegTrashCan />
					</button>
				</div>
			</li>
		</>
	) : (
		<></>
	);
};

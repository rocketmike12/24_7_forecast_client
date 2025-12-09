import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

import styles from "./WeatherCard.module.scss";

export const WeatherCard = function ({ place }) {
	const [weather, setWeather] = useState({});

	const getWeather = async function () {
		const { data } = await weatherApi.get("", { params: { q: place } });
		setWeather(data);
	};

	useEffect(() => {
		getWeather();
	}, []);

	return (
		<>
			<li>{JSON.stringify(weather)}</li>
		</>
	);
};

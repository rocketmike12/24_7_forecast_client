import { useState } from "react";

import axios from "axios";

import styles from "./WeatherCard.module.scss";

export const WeatherCard = function ({ place }) {
	const [weather, setWeather] = useState({});

	const getWeather = async function () {
		// const res = await axios.get("") ;
	}

	return (
		<>
			<li>{place}</li>
		</>
	);
};

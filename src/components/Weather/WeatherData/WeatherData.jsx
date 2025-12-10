import { useEffect, useState } from "react";

import axios from "axios";
import { weatherApi } from "../../../apis/weatherApi";

export const WeatherData = function ({ place }) {
	const [forecast, setForecast] = useState(null);

	const getWeather = async function () {
		const { data } = await weatherApi.get("/forecast", { params: { q: place } });
		setForecast(data);
	};

	useEffect(() => {
		getWeather();
	}, []);

	return (
		<>
			<p>{JSON.stringify(forecast)}</p>
		</>
	);
};

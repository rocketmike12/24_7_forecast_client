import { WeatherCard } from "./WeatherCard";

export const WeatherList = function ({ openForecast, closeForecast, places }) {
	return (
		<>
			{places.map((place, i) => (
				<WeatherCard openForecast={openForecast} closeForecast={closeForecast} place={place} key={i} />
			))}
		</>
	);
};

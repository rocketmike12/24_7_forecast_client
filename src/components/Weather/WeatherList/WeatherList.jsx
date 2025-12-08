import { WeatherCard } from "./WeatherCard";

export const WeatherList = function ({ favorites }) {
	return (
		<>
			{favorites.map((place, i) => (
				<WeatherCard place={place} key={i} />
			))}
		</>
	);
};

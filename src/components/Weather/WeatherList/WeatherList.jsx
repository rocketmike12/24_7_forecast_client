import { WeatherCard } from "./WeatherCard";

export const WeatherList = function ({ places }) {
	return (
		<>
			{places.map((place, i) => (
				<WeatherCard place={place} key={i} />
			))}
		</>
	);
};

import { WeatherCard } from "./WeatherCard";

export const WeatherList = function ({ openForecast, closeForecast, delFavorite, places }) {
	return (
		<>
			{places.map((place, i) => (
				<WeatherCard openForecast={openForecast} closeForecast={closeForecast} delFavorite={delFavorite} place={place} key={i} />
			))}
		</>
	);
};

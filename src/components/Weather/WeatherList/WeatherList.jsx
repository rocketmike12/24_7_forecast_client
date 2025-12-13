import { WeatherCard } from "./WeatherCard";

import styles from "./WeatherList.module.scss";

export const WeatherList = function ({ openForecast, closeForecast, delFavorite, places }) {
	return (
		<>
			<ul className={styles["weather-list"]}>
				{places.map((place, i) => (
					<WeatherCard openForecast={openForecast} closeForecast={closeForecast} delFavorite={delFavorite} place={place} key={i} />
				))}
			</ul>
		</>
	);
};

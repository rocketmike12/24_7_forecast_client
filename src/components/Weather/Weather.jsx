import { Container } from "../Container/Container";

import { WeatherList } from "./WeatherList/WeatherList";

import styles from "./Weather.module.scss";

export const Weather = function ({ isWeatherOpen, favorites }) {
	console.log(favorites)
	return (
		<>
			<section className={styles["weather"]}>
				<Container>{favorites && <WeatherList favorites={favorites} />}</Container>
			</section>
		</>
	);
};

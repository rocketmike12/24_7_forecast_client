import { Container } from "../Container/Container";

import { WeatherList } from "./WeatherList/WeatherList";

import styles from "./Weather.module.scss";

export const Weather = function ({ isWeatherOpen, favorites }) {
	return (
		<>
			<section className={styles["weather"]}>
				<Container>{favorites.length && <WeatherList favorites={favorites} />}</Container>
			</section>
		</>
	);
};

import { Container } from "../Container/Container";

import { WeatherList } from "./WeatherList/WeatherList";
import { WeatherData } from "./WeatherData/WeatherData";

import styles from "./Weather.module.scss";

export const Weather = function ({ isOpen, favorites, selectedPlace }) {
	return (
		<>
			<section className={styles["weather"]}>
				<Container>{favorites.length && !isOpen ? <WeatherList places={favorites} /> : selectedPlace && <WeatherData place={selectedPlace} />}</Container>
			</section>
		</>
	);
};

import { Container } from "../Container/Container";

import { WeatherList } from "./WeatherList/WeatherList";
import { WeatherData } from "./WeatherData/WeatherData";

import styles from "./Weather.module.scss";

export const Weather = function ({ isOpen, openForecast, closeForecast, favorites, selectedPlace }) {
	return (
		<>
			<section className={styles["weather"]}>
				<Container>
					{favorites.length && !isOpen ? <WeatherList openForecast={openForecast} closeForecast={closeForecast} places={favorites} /> : selectedPlace && <WeatherData place={selectedPlace} />}
				</Container>
			</section>
		</>
	);
};

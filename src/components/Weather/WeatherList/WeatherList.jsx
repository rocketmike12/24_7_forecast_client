import { useContext, useEffect, useState } from "react";

import { LoadingContext } from "../../../contexts/LoadingContext";

import { WeatherCard } from "./WeatherCard";

import styles from "./WeatherList.module.scss";

export const WeatherList = function ({ openForecast, closeForecast, delFavorite, places }) {
	const { setIsWeatherLoading } = useContext(LoadingContext);

	const [loadedElements, setLoadedElements] = useState(0);

	useEffect(() => {
		setIsWeatherLoading(loadedElements === places.length);
	}, [loadedElements]);

	const onCardLoad = function () {
		setLoadedElements(loadedElements + 1);
	};

	return (
		<>
			<ul className={styles["weather-list"]}>
				{places.map((place, i) => (
					<WeatherCard onCardLoad={onCardLoad} openForecast={openForecast} closeForecast={closeForecast} delFavorite={delFavorite} place={place} key={i} />
				))}
			</ul>
		</>
	);
};

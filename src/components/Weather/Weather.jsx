import { useContext, useEffect, useState } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";

import { userApi } from "../../apis/userApi";

import { toast } from "react-toastify";

import { Container } from "../Container/Container";

import { WeatherList } from "./WeatherList/WeatherList";
import { WeatherData } from "./WeatherData/WeatherData";

import styles from "./Weather.module.scss";

export const Weather = function ({ isOpen, openForecast, closeForecast, selectedPlace }) {
	const { setIsWeatherLoading } = useContext(LoadingContext);

	const [reloadComponent, setReloadComponent] = useState(null);

	const { isLogin, favorites, setFavorites } = useContext(AuthContext);

	const addFavorite = async function (favorite) {
		try {
			const { data } = await userApi.post("/favorite", { favorite: favorite }, { withCredentials: true });
			setFavorites(data.favorites);
		} catch (err) {
			if (err.status === 401) {
				toast.error("please login to add the location to favorites", { toastId: "pleaseLogin" });
			}

			// console.error(err);
		}
	};

	const delFavorite = async function (favorite) {
		try {
			const { data } = await userApi.post("/delfavorite", { favorite: favorite }, { withCredentials: true });
			setFavorites(data.favorites);
		} catch (err) {
			// console.error(err);
		}
	};

	useEffect(() => {
		setReloadComponent(favorites);
	}, [favorites]);

	useEffect(() => {
			setIsWeatherLoading(isOpen);
	}, [isOpen]);

	return (
		<>
			{((isLogin && favorites.length > 0) || isOpen) && (
				<section id="favorites" className={styles["weather"]}>
					<Container>
						{favorites.length && !isOpen ? (
							<WeatherList openForecast={openForecast} closeForecast={closeForecast} delFavorite={delFavorite} places={favorites} />
						) : (
							selectedPlace && <WeatherData closeForecast={closeForecast} addFavorite={addFavorite} delFavorite={delFavorite} place={selectedPlace} />
						)}
					</Container>
				</section>
			)}
		</>
	);
};

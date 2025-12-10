import { useContext, useState } from "react";

import { AuthContext } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

export const App = function () {
	const { favorites } = useContext(AuthContext);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalRole, setModalRole] = useState("register");
	const [isSearch, setIsSearch] = useState(false);
	const [isWeatherOpen, setIsWeatherOpen] = useState(false);
	const [selectedPlace, setSelectedPlace] = useState(null);

	const openModal = function () {
		setIsModalOpen(true);
	};

	const closeModal = function () {
		setIsModalOpen(false);
	};

	const openWeather = function (place) {
		setIsWeatherOpen(true);
		setSelectedPlace(place);
	};

	const closeWeather = function () {
		setIsWeatherOpen(false);
		setSelectedPlace(null);
	};

	return (
		<>
			<AuthModal isOpen={isModalOpen} role={modalRole} setRole={setModalRole} closeModal={closeModal} />

			<Header openModal={openModal} />

			<Hero isSearch={isSearch} openWeather={openWeather} closeWeather={closeWeather} />

			<Weather isOpen={isWeatherOpen} favorites={favorites} selectedPlace={selectedPlace} />
			<News />
			<Footer />
		</>
	);
};

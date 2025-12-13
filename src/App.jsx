import { useContext, useState } from "react";

import { AuthContext } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

export const App = function () {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalRole, setModalRole] = useState("register");
	const [isSearch, setIsSearch] = useState(false);
	const [isForecastOpen, setIsForecastOpen] = useState(false);
	const [selectedPlace, setSelectedPlace] = useState(null);

	const openModal = function () {
		setIsModalOpen(true);
	};

	const closeModal = function () {
		setIsModalOpen(false);
	};

	const openForecast = function (place) {
		setIsForecastOpen(true);
		setSelectedPlace(place);
	};

	const closeForecast = function () {
		setIsForecastOpen(false);
		setSelectedPlace(null);
	};

	return (
		<>
			<AuthModal isOpen={isModalOpen} role={modalRole} setRole={setModalRole} closeModal={closeModal} />

			<Header openModal={openModal} />

			<Hero isSearch={isSearch} openForecast={openForecast} closeForecast={closeForecast} />

			<Weather isOpen={isForecastOpen} openForecast={openForecast} closeForecast={closeForecast} selectedPlace={selectedPlace} />
			<News />
			<Footer />
		</>
	);
};

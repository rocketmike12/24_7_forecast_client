import { useContext, useState } from "react";

import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Pictures } from "./components/Pictures/Pictures";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

import { colors } from "./data/colors";

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
			<ToastContainer closeOnClick pauseOnHover={false} style={{ padding: 0 }} toastStyle={{ color: colors.fgLight, width: "fit-content", height: "100px", boxShadow: `0 0 16px 0 ${colors.fgLight}` }} />
			<AuthModal isOpen={isModalOpen} role={modalRole} setRole={setModalRole} closeModal={closeModal} />
			<Header openModal={openModal} />
			<Hero isSearch={isSearch} openForecast={openForecast} closeForecast={closeForecast} />
			<Weather isOpen={isForecastOpen} openForecast={openForecast} closeForecast={closeForecast} selectedPlace={selectedPlace} />
			<News />
			<Pictures />
			<Footer />:
		</>
	);
};

import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

export const App = function () {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isWeatherOpen, setIsWeatherOpen] = useState(false);

	const openModal = function () {
		setIsModalOpen(true);
	};

	const closeModal = function () {
		setIsModalOpen(false);
	};

	return (
		<>
			<AuthModal isOpen={isModalOpen} closeModal={closeModal} />

			<Header openModal={openModal} />

			<Hero />
			<Weather open={isWeatherOpen} />
			<News />
			<Footer />
		</>
	);
};

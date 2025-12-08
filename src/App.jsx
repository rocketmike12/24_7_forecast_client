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
	const [isWeatherOpen, setIsWeatherOpen] = useState(false);

	const openModal = function () {
		setIsModalOpen(true);
	};

	const closeModal = function () {
		setIsModalOpen(false);
	};

	return (
		<>
			<AuthModal isOpen={isModalOpen} role={modalRole} setRole={setModalRole} closeModal={closeModal} />

			<Header openModal={openModal} />

			<Hero />
			<Weather isOpen={isWeatherOpen} favorites={favorites} />
			<News />
			<Footer />
		</>
	);
};

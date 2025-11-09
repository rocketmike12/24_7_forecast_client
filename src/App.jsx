import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Weather } from "./components/Weather/Weather";
import { News } from "./components/News/News";
import { Footer } from "./components/Footer/Footer";

import { AuthModal } from "./components/AuthModal/AuthModal";

export const App = function () {
	return (
		<>
			<AuthModal open />

			<Header />
			<Hero />
			<Weather />
			<News />
			<Footer />
		</>
	);
};

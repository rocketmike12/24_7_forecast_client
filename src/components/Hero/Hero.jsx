import { Container } from "../Container/Container";

import { FiSearch } from "react-icons/fi";

import styles from "./Hero.module.scss";

export const Hero = function () {
	const date = new Date();
	let dateSup;
	switch (parseInt(date.toLocaleDateString("en-GB", { day: "numeric" })) % 10) {
		case 1:
			dateSup = "st";
			break;
		case 2:
			dateSup = "nd";
			break;
		case 3:
			dateSup = "rd";
			break;
		default:
			dateSup = "th";
	}

	return (
		<>
			<section className={styles["hero"]}>
				<Container>
					<h1 className={styles["hero__title"]}>Weather dashboard</h1>
					<div className={styles["hero__wrap"]}>
						<p className={styles["hero__text"]}>Create your personal list of favorite cities and always be aware of the weather.</p>
						<p className={styles["hero__text"]}>
							{`${date.toLocaleDateString("en-GB", { month: "long" })} ${date.toLocaleDateString("en-GB", { year: "numeric" })}`}
							<br />
							{` ${date.toLocaleDateString("en-GB", { weekday: "long" })}, ${date.toLocaleDateString("en-GB", { day: "numeric" })}`}
							<sup className={styles["hero__text__sup"]}>{dateSup}</sup>
						</p>
					</div>
					<div className={styles["hero__search"]}>
						<input autoFocus type="text" placeholder="Search location..." className={styles["hero__search__input"]} />
						<button className={styles["hero__search__button"]}>
							<FiSearch />
						</button>
					</div>
				</Container>
			</section>
		</>
	);
};

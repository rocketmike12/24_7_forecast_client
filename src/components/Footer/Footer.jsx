import { Container } from "../Container/Container";

import logo from "../../img/logo.svg";
import { FaDiscord, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.scss";

export const Footer = function () {
	return (
		<>
			<footer className={styles["footer"]}>
				<Container>
					<img src={logo} alt="logo" className={styles["footer__logo"]} />
					<address className={styles["footer__address"]}>
						<h3 className={styles["footer__address__title"]}>Address</h3>
						<p className={styles["footer__address__text"]}>
							Yuriia Illienka str, 12
							<br />
							Kyiv
							<br />
							Ukraine
						</p>
					</address>
					<div className={styles["footer__contacts"]}>
						<h3 className={styles["footer__contacts__title"]}>Contact us</h3>
						<ul className={styles["footer__contacts__list"]}>
							<li className={styles["footer__contacts__list__item"]}>
								<a href="https://github.com/rocketmike12/">
									<FaGithub />
								</a>
							</li>
							<li className={styles["footer__contacts__list__item"]}>
								<a href="https://discordapp.com/users/1051443642088292464">
									<FaDiscord />
								</a>
							</li>
						</ul>
					</div>
				</Container>
			</footer>
		</>
	);
};

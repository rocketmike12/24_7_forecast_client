import profileImg from "../../img/profile.png";
import logo from "../../img/logo.svg";

import { Container } from "../Container/Container";

import styles from "./Header.module.scss";

export const Header = function ({ openModal }) {
	return (
		<>
			<header className={styles["header"]}>
				<Container>
					<img src={logo} alt="logo" className={styles["header__logo"]} />

					<nav className={styles["header__nav"]}>
						<ul className={styles["header__nav-list"]}>
							<li className={styles["header__nav-list-item"]}>
								<p className={styles["header__nav-list-text"]}>Who we are</p>
							</li>
							<li className={styles["header__nav-list-item"]}>
								<p className={styles["header__nav-list-text"]}>Contacts</p>
							</li>
							<li className={styles["header__nav-list-item"]}>
								<p className={styles["header__nav-list-text"]}>Menu</p>
							</li>
						</ul>
					</nav>

					<div className={styles["header__profile"]}>
						<button className={styles["header__profile-button"]} onClick={openModal}>Sign Up</button>
						<img src={profileImg} alt="user" className={styles["header__profile-img"]} />
					</div>
				</Container>
			</header>
		</>
	);
};

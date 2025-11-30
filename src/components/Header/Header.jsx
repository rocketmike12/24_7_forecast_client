import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { Container } from "../Container/Container";

import profileImg from "../../img/profile.png";
import logo from "../../img/logo.svg";

import styles from "./Header.module.scss";

export const Header = function ({ openModal }) {
	const { isLogin, setIsLogin, username, setUsername } = useContext(AuthContext);

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
						{isLogin && <p className={styles["header__profile-username"]}>{username}</p>}

						<button className={styles["header__profile-button"]} onClick={openModal}>
							{isLogin ? "Profile" : "Sign Up"}
						</button>

						<img src={profileImg} alt="user" className={styles["header__profile-img"]} />
					</div>
				</Container>
			</header>
		</>
	);
};

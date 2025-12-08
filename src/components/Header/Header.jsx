import { useContext } from "react";

import axios from "axios";
import { userApi } from "../../apis/userApi";

import { AuthContext } from "../../contexts/AuthContext";

import { Container } from "../Container/Container";

import profileImg from "../../img/profile.png";
import logo from "../../img/logo.svg";

import styles from "./Header.module.scss";

export const Header = function ({ openModal }) {
	const { isLogin, setIsLogin, username, setUsername } = useContext(AuthContext);

	const logoutUser = async function () {
		try {
			await userApi.post("/auth/logout", "", { withCredentials: true });
			setIsLogin(false);
			setUsername(null);
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = function (e) {
		if (e.target !== e.currentTarget) return;

		logoutUser();
	};

	return (
		<>
			<header className={styles["header"]}>
				<Container>
					<img src={logo} alt="logo" className={styles["header__logo"]} />

					<nav className={styles["header__nav"]}>
						<ul className={styles["header__nav-list"]}>
							<li className={styles["header__nav-list-item"]}>
								<a href="#" className={styles["header__nav-list-link"]}>
									Who we are
								</a>
							</li>
							<li className={styles["header__nav-list-item"]}>
								<a href="#" className={styles["header__nav-list-link"]}>
									Contacts
								</a>
							</li>
							<li className={styles["header__nav-list-item"]}>
								<a href="#" className={styles["header__nav-list-link"]}>
									Menu
								</a>
							</li>
						</ul>
					</nav>

					<div className={styles["header__profile"]}>
						{isLogin && (
							<>
								<p className={styles["header__profile-username"]}>{username}</p>
								<button className={styles["header__profile-button"]} onClick={handleLogout}>
									Log out
								</button>
							</>
						)}

						{!isLogin && (
							<button className={styles["header__profile-button"]} onClick={openModal}>
								Sign Up
							</button>
						)}

						<img src={profileImg} alt="user" className={styles["header__profile-img"]} />
					</div>
				</Container>
			</header>
		</>
	);
};

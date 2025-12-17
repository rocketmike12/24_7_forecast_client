import { useContext, useState } from "react";

import axios from "axios";
import { userApi } from "../../apis/userApi";

import { AuthContext } from "../../contexts/AuthContext";

import { Container } from "../Container/Container";

import profileImg from "../../img/profile.png";
import logo from "../../img/logo.svg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import styles from "./Header.module.scss";

export const Header = function ({ openModal }) {
	const { isLogin, setIsLogin, username, setUsername, setFavorites } = useContext(AuthContext);

	const logoutUser = async function () {
		try {
			await userApi.post("/logout", "", { withCredentials: true });
			setIsLogin(false);
			setUsername(null);
			setFavorites([]);
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = function (e) {
		if (e.target !== e.currentTarget) return;

		logoutUser();
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<header className={styles["header"]}>
				<Container>
					<img src={logo} alt="logo" className={styles["header__logo"]} />

					<button
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
						className={`${styles["header__menu__button"]} ${isMenuOpen ? styles["is-open"] : ""}`}
					>
						Menu <MdOutlineKeyboardArrowRight />
					</button>
				</Container>
			</header>

			<div className={`${styles["mob__menu"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
				<Container>
					<nav className={styles["mob__menu__nav"]}>
						<ul className={styles["mob__menu__nav-list"]}>
							<li className={styles["mob__menu__nav-list-item"]}>
								<a href="#" className={styles["mob__menu__nav-list-link"]}>
									Who we are
								</a>
							</li>
							<li className={styles["mob__menu__nav-list-item"]}>
								<a href="#" className={styles["mob__menu__nav-list-link"]}>
									Contacts
								</a>
							</li>
							<li className={styles["mob__menu__nav-list-item"]}>
								<a href="#" className={styles["mob__menu__nav-list-link"]}>
									Menu
								</a>
							</li>
						</ul>
					</nav>
					<div className={styles["mob__menu__profile"]}>
						{isLogin && (
							<>
								<p className={styles["mob__menu__profile-username"]}>{username}</p>
								<button className={styles["mob__menu__profile-button"]} onClick={handleLogout}>
									Log out
								</button>
							</>
						)}

						{!isLogin && (
							<button className={styles["mob__menu__profile-button"]} onClick={openModal}>
								Sign Up
							</button>
						)}

						<img src={profileImg} alt="user" className={styles["mob__menu__profile-img"]} />
					</div>
				</Container>
			</div>
		</>
	);
};

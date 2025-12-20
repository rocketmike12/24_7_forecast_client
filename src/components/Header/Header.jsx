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
			await userApi.post("/logout", "", { withCredentials: true, credentials: "include" });
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
						className={`${styles["header__mob-menu__button"]} ${isMenuOpen ? styles["is-open"] : ""}`}
					>
						Menu <MdOutlineKeyboardArrowRight />
					</button>

					<nav className={styles["header__nav"]}>
						<ul className={styles["header__nav__list"]}>
							<li className={styles["header__nav__list__item"]}>
								<a href="#favorites" className={styles["header__nav__list__link"]}>
									Favorites
								</a>
							</li>
							<li className={styles["header__nav__list__item"]}>
								<a href="#news" className={styles["header__nav__list__link"]}>
									News
								</a>
							</li>
							<li className={styles["header__nav__list__item"]}>
								<a href="#contacts" className={styles["header__nav__list__link"]}>
									Contacts
								</a>
							</li>
						</ul>
					</nav>

					<div className={styles["header__profile"]}>
						{isLogin && (
							<>
								<p className={styles["header__profile__username"]}>{username}</p>
								<button className={styles["header__profile__button"]} onClick={handleLogout}>
									Log out
								</button>
							</>
						)}

						{!isLogin && (
							<button className={styles["header__profile__button"]} onClick={openModal}>
								Sign Up
							</button>
						)}

						<img src={profileImg} alt="user" className={styles["header__profile__img"]} />
					</div>
				</Container>
			</header>

			<div className={`${styles["mob-menu"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
				<Container>
					<nav className={styles["mob-menu__nav"]}>
						<ul className={styles["mob-menu__nav__list"]}>
							<li className={styles["mob-menu__nav__list__item"]}>
								<a href="#favorites" className={styles["mob-menu__nav__list__link"]}>
									Favorites
								</a>
							</li>
							<li className={styles["mob-menu__nav__list__item"]}>
								<a href="#news" className={styles["mob-menu__nav__list__link"]}>
									News
								</a>
							</li>
							<li className={styles["mob-menu__nav__list__item"]}>
								<a href="#contacts" className={styles["mob-menu__nav__list__link"]}>
									Contacts
								</a>
							</li>
						</ul>
					</nav>
					<div className={styles["mob-menu__profile"]}>
						{isLogin && (
							<>
								<p className={styles["mob-menu__profile__username"]}>{username}</p>
								<button className={styles["mob-menu__profile__button"]} onClick={handleLogout}>
									Log out
								</button>
							</>
						)}

						{!isLogin && (
							<button className={styles["mob-menu__profile__button"]} onClick={openModal}>
								Sign Up
							</button>
						)}

						<img src={profileImg} alt="user" className={styles["mob-menu__profile__img"]} />
					</div>
				</Container>
			</div>
		</>
	);
};

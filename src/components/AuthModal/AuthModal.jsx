import { useContext } from "react";

import axios from "axios";

import { AuthContext } from "../../contexts/AuthContext";

import styles from "./AuthModal.module.scss";

axios.defaults.baseURL = import.meta.env.VITE_ENV === "dev" ? "/api/v0" : import.meta.env.VITE_USERS_API;

export const AuthModal = function ({ isOpen, closeModal }) {
	const { isLogin, setIsLogin, username, setUsername } = useContext(AuthContext);

	const handleClose = function (e) {
		if (e.type === "keydown" && e.code === "Escape") closeModal();
		if (e.type === "click" && e.target === e.currentTarget) closeModal();
	};

	const handleSubmit = function (e) {
		e.preventDefault();

		const form = e.currentTarget;
		const username = form.elements.username.value;
		const password = form.elements.password.value;

		axios
			.post("/auth/register", { username: username, password: password }, { withCredentials: true, partitioned: true })
			.then((res) => {
				setIsLogin(true);
				setUsername(res.data.username);
			})
			.catch((err) => {
				console.error(err);
			});

		form.reset();

		closeModal();
	};

	document.addEventListener("keydown", handleClose);

	return (
		<>
			<div id="overlay" onClick={handleClose} className={`${styles["overlay"]} ${isOpen ? "" : styles["hidden"]}`}>
				<div className={styles["modal"]}>
					<h2 className={styles["modal__title"]}>Sign up</h2>

					<form onSubmit={handleSubmit} className={styles["modal__form"]}>
						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="username" className={styles["modal__input-label"]}>
								Username
							</label>
							<input type="text" name="username" placeholder="Username" className={styles["modal__input"]} />
						</div>

						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="email" className={styles["modal__input-label"]}>
								Email
							</label>
							<input type="text" name="email" placeholder="Email" className={styles["modal__input"]} />
						</div>

						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="password" className={styles["modal__input-label"]}>
								Password
							</label>
							<input type="text" name="password" placeholder="Password" className={styles["modal__input"]} />
						</div>

						<button type="submit" className={styles["modal__btn"]}>
							Sign up
						</button>

						<p className={styles["modal__login"]}>
							Already have an account?
							<a href="" className={styles["modal__login__link"]}>
								Log In
							</a>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

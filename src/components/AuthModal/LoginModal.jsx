import { useContext } from "react";

import axios from "axios";
import { userApi } from "../../apis/userApi";

import { AuthContext } from "../../contexts/AuthContext";

import styles from "./AuthModal.module.scss";

export const LoginModal = function ({ setRole, closeModal }) {
	const { isLogin, setIsLogin, username, setUsername } = useContext(AuthContext);

	const loginUser = async function (username, password) {
		try {
			const { data } = await userApi.post("/auth/login", { username: username, password: password }, { withCredentials: true });
			setIsLogin(true);
			setUsername(data.username);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = function (e) {
		e.preventDefault();

		const form = e.currentTarget;
		const username = form.elements.username.value;
		const password = form.elements.password.value;

		loginUser(username, password);

		form.reset();

		closeModal();
	};

	const handleRole = function (e) {
		e.preventDefault();

		if (e.target !== e.currentTarget) return;

		setRole("register");
	};

	return (
		<>
			<div className={styles["modal"]}>
				<h2 className={styles["modal__title"]}>Login</h2>

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
						Login
					</button>

					<p className={styles["modal__login"]}>
						Don't have an account?
						<a href="" onClick={handleRole} className={styles["modal__login__link"]}>
							Sign up
						</a>
					</p>
				</form>
			</div>
		</>
	);
};

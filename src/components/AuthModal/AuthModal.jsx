import styles from "./AuthModal.module.scss";

export const AuthModal = function ({ isOpen, closeModal }) {
	const handleClose = function (e) {
		if (e.type === "keydown" && e.code === "Escape") closeModal();
		if (e.type === "click" && e.target === e.currentTarget) closeModal();
	};

	document.addEventListener("keydown", handleClose);

	return (
		<>
			<div id="overlay" onClick={handleClose} className={`${styles["overlay"]} ${isOpen ? "" : styles["hidden"]}`}>
				<div className={styles["modal"]}>
					<h2 className={styles["modal__title"]}>Sign up</h2>

					<form className={styles["modal__form"]}>
						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="username" className={styles["modal__input-label"]}>
								Username
							</label>
							<input type="text" name="username" className={styles["modal__input"]} />
						</div>

						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="email" className={styles["modal__input-label"]}>
								Email
							</label>
							<input type="text" name="email" className={styles["modal__input"]} />
						</div>

						<div className={styles["modal__input-wrap"]}>
							<label htmlFor="password" className={styles["modal__input-label"]}>
								Password
							</label>
							<input type="text" name="password" className={styles["modal__input"]} />
						</div>

						<button type="submit" className={styles["modal__btn"]}>
							Sign up
						</button>

						<a href="">Already have an account? Log In</a>
					</form>
				</div>
			</div>
		</>
	);
};

import styles from "./Container.module.scss";

export const Container = function ({ children }) {
	return <div className={styles["container"]}>{children}</div>;
};

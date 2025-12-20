import { ClipLoader } from "react-spinners";

import styles from "./Loader.module.scss";

export const Loader = function () {
	return (
		<div className={styles["overlay"]}>
			<ClipLoader size={120} color={"hsl(290, 50%, 65%)"} cssOverride={{borderWidth: "4px"}} />
		</div>
	);
};

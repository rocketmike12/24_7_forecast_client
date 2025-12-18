import styles from "./WeatherData.module.scss";

export const WeeklyForecast = function ({ data }) {
	let dailyData = data.filter((el) => el.dt_txt.includes("00:00:00"));

	const pad = (n) => String(n).padStart(5, "0");

	return (
		<>
			<ul className={styles["weather-data__weekly__list"]}>
				{dailyData.map((el, i) => (
					<li className={styles["weather-data__weekly__list__item"]} key={i}>
						<p className={styles["weather-data__weekly__list__item__date"]}>
							{`${new Date(el.dt_txt).toLocaleDateString("en-GB", { weekday: "short" })}, ${new Date(el.dt_txt).toLocaleDateString("en-GB", { month: "short" })} ${new Date(el.dt_txt).toLocaleDateString("en-GB", { day: "numeric" })}`}
						</p>

						<div className={styles["weather-data__weekly__list__item__middle-wrap"]}>
							<img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`} alt="" className={styles["weather-data__weekly__list__item__img"]} />
							<p className={styles["weather-data__weekly__list__item__temperature"]}>{`${pad(el.main.temp_max.toFixed(2))}/${pad(el.main.temp_min.toFixed(2))}°C`}</p>
						</div>

						<p className={styles["weather-data__weekly__list__item__weather"]}>{el.weather[0].description}</p>
					</li>
				))}
			</ul>
		</>
	);
};

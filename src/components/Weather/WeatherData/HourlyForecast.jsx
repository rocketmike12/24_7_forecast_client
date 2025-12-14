import { useState } from "react";

import { Line } from "react-chartjs-2";

import { colors } from "../../../data/colors";

import styles from "./WeatherData.module.scss";

export const HourlyForecast = function ({ data }) {
	const [chartData, setChartData] = useState({
		labels: data.map((el) => el.dt_txt.split(" ")[1]),
		datasets: [
			{
				label: "",
				data: data.map((el) => el.main.temp),
				backgroundColor: colors.accentLight,
				borderColor: colors.accentLight,
				borderWidth: 2
			}
		]
	});

	return (
		<div className={styles["weather-data__hourly__chart-container"]}>
			<Line
				data={chartData}
				options={{
					plugins: {
						title: {
							display: false
						},
						legend: {
							display: false
						}
					},
					elements: {
						point: {
							radius: 0
						}
					}
				}}
			/>
		</div>
	);
};

import { useState } from "react";

import { Line } from "react-chartjs-2";

import { colors } from "../../../data/colors";

export const HourlyForecast = function ({ data }) {
	const [chartData, setChartData] = useState({
		labels: data.map((el) => el.dt_txt),
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
		<div className="chart-container">
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
					}
				}}
			/>
		</div>
	);
};

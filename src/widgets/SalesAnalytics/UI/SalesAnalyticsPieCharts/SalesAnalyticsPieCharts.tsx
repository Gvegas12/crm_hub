import { FC } from "react";

import UI from "@/shared/UI";

import styles from "./SalesAnalyticsPieCharts.module.scss";

interface ISalesAnalyticsPieChartsProps {}

export const SalesAnalyticsPieCharts: FC<
	ISalesAnalyticsPieChartsProps
> = () => {
	return (
		<div className={styles.SalesAnalyticsPieCharts}>
			<div className={styles.card}>
				<UI.PieChart />
			</div>
			<div className={styles.card}>
				<UI.PieChart />
			</div>
		</div>
	);
};

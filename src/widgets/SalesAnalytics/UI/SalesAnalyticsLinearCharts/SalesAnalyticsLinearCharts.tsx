import { FC } from "react";

import { LinearChartWithDescription } from "@/features/LinearChartWithDescription";

import styles from "./SalesAnalyticsLinearCharts.module.scss";

export const SalesAnalyticsLinearCharts: FC = () => {
	return (
		<div className={styles.SalesAnalyticsLinearCharts}>
			<LinearChartWithDescription className={styles.card} />
			<LinearChartWithDescription className={styles.card} />
			<LinearChartWithDescription className={styles.card} />
		</div>
	);
};

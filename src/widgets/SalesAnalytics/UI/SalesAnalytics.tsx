import { FC } from "react";

import clsx from "clsx";

import { SalesAnalyticsLinearCharts } from "./SalesAnalyticsLinearCharts/SalesAnalyticsLinearCharts";

import styles from "./SalesAnalytics.module.scss";

interface ISalesAnalyticsProps {
	className?: string;
}

export const SalesAnalytics: FC<ISalesAnalyticsProps> = ({ className }) => (
	<div className={clsx(styles.SalesAnalytics, className)}>
		<SalesAnalyticsLinearCharts />
	</div>
);

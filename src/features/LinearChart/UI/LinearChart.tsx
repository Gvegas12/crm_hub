import { FC } from "react";

import clsx from "clsx";

import UI from "@/shared/UI";

import data from "./mock.json";

import styles from "./LinearChart.module.scss";

interface ILinearChartProps {
	className?: string;
}

export const LinearChart: FC<ILinearChartProps> = ({ className }) => (
	<div className={clsx(styles.LinearChart, className)}>
		<UI.LinearChart data={data} />
	</div>
);

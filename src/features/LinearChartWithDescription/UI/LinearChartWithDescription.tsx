import { FC } from "react";

import clsx from "clsx";

import UI from "@/shared/UI";

import data from "./mock.json";

import styles from "./LinearChartWithDescription.module.scss";

interface ILinearChartWithDescriptionProps {
	className?: string;
}

export const LinearChartWithDescription: FC<
	ILinearChartWithDescriptionProps
> = ({ className }) => (
	<div className={clsx(styles.LinearChartWithDescription, className)}>
		<div className={styles.wrapper}>
			<div className={styles.text_wrapper}>
				<p className={styles.title}>Product Sales</p>
				<p className={styles.value}>$546.087</p>
			</div>
			<p className={styles.sub_value}>25.40%</p>
		</div>
		<UI.LinearChart margin={{ top: 30 }} data={data} />
	</div>
);

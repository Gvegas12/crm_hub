import { FC } from "react";

import { ResponsivePie } from "@nivo/pie";
import clsx from "clsx";

import dataMock from "./data.json";

import styles from "./UIPieChart.module.scss";

export type UIPieChartData = {
	id: string;
	color: string;
	label: string;
	value: string | number;
};

interface IUIPieChartProps {
	className?: string;
	data?: UIPieChartData[];
}

export const UIPieChart: FC<IUIPieChartProps> = ({
	className,
	data = dataMock,
}) => (
	<div className={clsx(styles.UIPieChart, className)}>
		<ResponsivePie
			data={data}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.55}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.4]],
			}}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsDiagonalLength={20}
			arcLinkLabelsStraightLength={20}
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsRadiusOffset={0.3}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: "ruby",
					},
					id: "dots",
				},
				{
					match: {
						id: "c",
					},
					id: "dots",
				},
				{
					match: {
						id: "go",
					},
					id: "dots",
				},
				{
					match: {
						id: "python",
					},
					id: "dots",
				},
				{
					match: {
						id: "scala",
					},
					id: "lines",
				},
				{
					match: {
						id: "lisp",
					},
					id: "lines",
				},
				{
					match: {
						id: "elixir",
					},
					id: "lines",
				},
				{
					match: {
						id: "javascript",
					},
					id: "lines",
				},
			]}
			legends={[
				{
					anchor: "right",
					direction: "column",
					justify: false,
					translateX: 90,
					translateY: 140,
					itemsSpacing: 6,
					itemWidth: 100,
					itemHeight: 20,
					itemTextColor: "#999",
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 15,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000",
							},
						},
					],
				},
			]}
		/>
	</div>
);

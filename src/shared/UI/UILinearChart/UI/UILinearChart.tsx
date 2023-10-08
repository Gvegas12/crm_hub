import { FC } from "react";

import { ResponsiveLine, LineSvgProps } from "@nivo/line";
import clsx from "clsx";

import styles from "./UILinearChart.module.scss";

export type UILinearChartData = {
	id: string;
	color: string;
	data: Record<string | number, string | number>[];
};

interface IUILinearChartProps extends Omit<LineSvgProps, "data"> {
	className?: string;
	data: UILinearChartData[];
}

export const UILinearChart: FC<IUILinearChartProps> = ({
	data,
	className,
	...props
}) => (
	<div className={clsx(styles.UILinearChart, className)}>
		<ResponsiveLine
			data={data}
			margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			yFormat=" >-.2f"
			curve="cardinal"
			axisTop={null}
			axisRight={null}
			axisBottom={null}
			axisLeft={null}
			enableGridX={false}
			enableGridY={false}
			enablePoints={false}
			pointSize={10}
			pointColor={{ theme: "background" }}
			pointBorderWidth={2}
			pointBorderColor={{ from: "serieColor" }}
			pointLabelYOffset={-12}
			enableArea={true}
			areaOpacity={0.15}
			useMesh={true}
			legends={[]}
			{...props}
		/>
	</div>
);

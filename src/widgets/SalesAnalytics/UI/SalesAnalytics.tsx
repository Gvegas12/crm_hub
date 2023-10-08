import { FC, ReactNode } from "react";

import clsx from "clsx";

import styles from "./SalesAnalytics.module.scss";

interface ISalesAnalyticsProps {
	children: ReactNode;
	className?: string;
}

export const SalesAnalytics: FC<ISalesAnalyticsProps> = ({
	className,
	children,
}) => <div className={clsx(styles.SalesAnalytics, className)}>{children}</div>;

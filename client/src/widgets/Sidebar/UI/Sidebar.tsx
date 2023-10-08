import { FC } from "react";

import clsx from "clsx";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
	return <div className={clsx(styles.Sidebar)}></div>;
};

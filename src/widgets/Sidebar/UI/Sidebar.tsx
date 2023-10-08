import { FC } from "react";

import clsx from "clsx";

import { privateRoutePaths } from "@/shared/config/routes";

import SidebarkLink from "./SidebarkLink/SidebarkLink";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
	return (
		<div className={clsx(styles.Sidebar)}>
			<div className={styles.links}>
				<SidebarkLink to={privateRoutePaths.home}>Sales Analytics</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Accounts</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Contacts</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Leads</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>
					Opportunities
				</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Cases</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Activities</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Documents</SidebarkLink>
				<SidebarkLink to={privateRoutePaths.contacts}>Reports</SidebarkLink>
			</div>
		</div>
	);
};

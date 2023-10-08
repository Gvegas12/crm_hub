import { FC } from "react";

import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";

import styles from "./MainLayout.module.scss";

const MainLayout: FC = () => {
	return (
		<div>
			<Header className={styles.header} />
			<main className={styles.main}>
				<Sidebar />
				<div className={styles.pageWrapper}>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default MainLayout;

import { FC } from "react";

import clsx from "clsx";

import LogoIcon from "@/shared/assets/img/icons/js.svg";
import { privateRoutePaths } from "@/shared/config/routes";

import BurgerIcon from "./icons/burger.svg";

import styles from "./Header.module.scss";

interface IHeaderProps {
	className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
	return (
		<header className={clsx(styles.Header, className)}>
			<div className={styles.wrapper}>
				<a href={privateRoutePaths.home}>
					<LogoIcon className={styles.logo} />
				</a>
				<div className={styles.userWrapper}>
					<div className={styles.user} />
					<div className={styles.burger}>
						<BurgerIcon className={styles.icon} />
					</div>
				</div>
			</div>
		</header>
	);
};

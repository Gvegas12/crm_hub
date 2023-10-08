import { FC } from "react";

import clsx from "clsx";

import BurgerIcon from "./icons/burger.svg";

import styles from "./Header.module.scss";

interface IHeaderProps {
	className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
	console.log(BurgerIcon);

	return (
		<header className={clsx(styles.Header, className)}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>CRMHUB</div>
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

import { FC } from "react";

import clsx from "clsx";
import { NavLink, NavLinkProps } from "react-router-dom";

// import ArrowIcon from "./icons/arrow.svg";

import styles from "./SidebarkLink.module.scss";

interface ISidebarkLinkProps extends NavLinkProps {}

const SidebarkLink: FC<ISidebarkLinkProps> = ({ className, ...props }) => (
	<div className={styles.SidebarkLink}>
		<div className={styles.wrapper}>
			<NavLink
				className={({ isActive }) =>
					clsx(styles.navLink, isActive && styles.active, className)
				}
				{...props}
			/>
		</div>
		{/* <ArrowIcon className={styles.arrow} /> */}
	</div>
);

export default SidebarkLink;

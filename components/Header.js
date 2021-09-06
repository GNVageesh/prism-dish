import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div>
			<div>
				<header className={styles.header}>
					<nav className={styles.navbar}>
						<a href="#" className={styles.logo}>
							WebDev.
						</a>
						<ul className={styles.menu}>
							<li className={styles.item}>
								<a href="#" className={styles.link}>
									Services
								</a>
							</li>
							<li className={styles.item}>
								<a href="#" className={styles.link}>
									Blog
								</a>
							</li>
							<li className={styles.item}>
								<a href="#" className={styles.link}>
									About
								</a>
							</li>
							<li className={styles.item}>
								<a href="#" className={styles.link}>
									Contact
								</a>
							</li>
						</ul>
						<div className={styles.hamburger}>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
};

export default Header;

import React from 'react';

import styles from './styles.module.scss';

const LoadingScreen = () => {
	return (
		<section className={styles.LoadingScreen__bg}>
			<div className={styles.LoadingScreen}>
				<div className={styles.LoadingScreen__item}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={styles.LoadingScreen__item}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={styles.LoadingScreen__item}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={styles.LoadingScreen__item}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default LoadingScreen;

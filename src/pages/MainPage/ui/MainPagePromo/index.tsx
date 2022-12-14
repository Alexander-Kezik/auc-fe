import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import MainButton from 'shared/ui/MainButton';
import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

import safeIcon from 'shared/assets/icons/safe.png';
import fastIcon from 'shared/assets/icons/fast.png';
import easyIcon from 'shared/assets/icons/easy.png';

const MainPagePromo: FC = () => {
	return (
		<header className={styles.MainPagePromo}>
			<div className='container'>
				<h1 className={styles.MainPagePromo__title}>Begin buying and selling right now!</h1>
				<h2 className={styles.MainPagePromo__subtitle}>Write to us if you have any questions</h2>
				<NavLink to={Paths.SUPPORT}>
					<MainButton className={styles.MainPagePromo__support}>Write to us</MainButton>
				</NavLink>
				<div className={styles.MainPagePromo__icons}>
					<div className={styles.MainPagePromo__icons__icon}>
						<img className={styles.MainPagePromo__icons__icon_img} src={safeIcon} alt='safe icon' />
						<p className={styles.MainPagePromo__icons__icon_text}>Safe</p>
					</div>
					<div className={styles.MainPagePromo__icon}>
						<img className={styles.MainPagePromo__icons__icon_img} src={easyIcon} alt='easy icon' />
						<p className={styles.MainPagePromo__icons__icon_text}>Easy</p>
					</div>
					<div className={styles.MainPagePromo__icon}>
						<img className={styles.MainPagePromo__icons__icon_img} src={fastIcon} alt='fast icon' />
						<p className={styles.MainPagePromo__icons__icon_text}>Fast</p>
					</div>
				</div>
			</div>
			<div className={styles.MainPagePromo__divider}></div>
		</header>
	);
};

export default MainPagePromo;

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import SignInBtn from './ui/SignInBtn';
import SignUpBtn from './ui/SignUpBtn';
import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

import aucHammer from 'shared/assets/icons/auc-hammer.png';

const NavBar: FC = () => {
	const cn = classNames.bind(styles);
	const navLinks = ['Profile', 'Lots', 'Language'].map(item => {
		return (
			<li className={styles.NavBar__links__item} key={item}>
				<NavLink
					className={({ isActive }) => cn(styles.NavBar__links__link, { ['active']: isActive })}
					to={item.toLocaleLowerCase()}
				>
					{item}
				</NavLink>
			</li>
		);
	});

	return (
		<nav className={styles.NavBar}>
			<div className='container'>
				<div className={styles.NavBar__wrapper}>
					<NavLink to={Paths.HOME} className={styles.NavBar__logo}>
						<img className={styles.NavBar__logo_img} src={aucHammer} alt={'logo'} />
						𝒜𝓊𝒸
					</NavLink>
					<ul className={styles.NavBar__links}>{navLinks}</ul>
					<div className={styles.NavBar__btns}>
						<SignInBtn />
						<SignUpBtn />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

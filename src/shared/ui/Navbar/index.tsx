import React, { FC } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Routes as Paths } from 'shared/configs/routes';
import MainButton from 'shared/ui/MainButton';
import { useAppSelector } from 'shared/hooks/reduxAppHooks';
import Balance from './ui/Balance';

import styles from './styles.module.scss';

import aucHammer from 'shared/assets/icons/auc-hammer.png';

const Navbar: FC = () => {
	const cn = classNames.bind(styles);
	const {
		user: { email }
	} = useAppSelector(state => state.auth);
	const navigate = useNavigate();

	const navLinks = [
		['profile', `${Paths.PROFILE}/${email}`],
		['lots', Paths.LOTS],
		['users', Paths.USERS]
	].map(item => {
		return (
			<li className={styles.NavBar__links__item} key={item[0]}>
				<NavLink
					className={({ isActive }) => cn(styles.NavBar__links__link, { ['active']: isActive })}
					to={item[1]}
				>
					{item[0][0].toUpperCase() + item[0].slice(1)}
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
						<MainButton
							onClick={() => navigate(Paths.SIGNIN)}
							className={styles.NavBar__btns_signin}
						>
							Sign In
						</MainButton>
						<MainButton
							onClick={() => navigate(Paths.SIGNUP)}
							className={styles.NavBar__btns_signup}
						>
							Sign Up
						</MainButton>
					</div>
				</div>
			</div>
			<Balance />
		</nav>
	);
};

export default Navbar;

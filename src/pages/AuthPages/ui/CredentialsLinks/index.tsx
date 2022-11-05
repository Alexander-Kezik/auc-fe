import React from 'react';
import classNames from 'classnames/bind';

import { NavLink } from 'react-router-dom';
import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

const CredentialsLinks = () => {
	const cn = classNames.bind(styles);

	return (
		<div className={styles.CredentialsLinks}>
			<NavLink
				className={({ isActive }) => cn(styles.CredentialsLinks__link, { ['active']: isActive })}
				to={Paths.SIGNIN}
			>
				Sign in
			</NavLink>
			<NavLink
				className={({ isActive }) => cn(styles.CredentialsLinks__link, { ['active']: isActive })}
				to={Paths.SIGNUP}
			>
				Sign up
			</NavLink>
		</div>
	);
};

export default CredentialsLinks;

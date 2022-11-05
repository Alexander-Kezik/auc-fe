import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

interface IProps {
	username: string;
	email: string;
	name: string;
}

const UserItem: FC<IProps> = ({ username, name, email }) => {
	return (
		<NavLink className={styles.UserItem} to={Paths.USERS + '/user/' + email}>
			<p className={styles.UserItem__param}>name: {name}</p>
			<p className={styles.UserItem__param}>username: {username}</p>
			<p className={styles.UserItem__param}>email: {email}</p>
		</NavLink>
	);
};

export default UserItem;

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import UserInfo from './ui/UserInfo';
import UserLots from './ui/UserLots';

import styles from './styles.module.scss';

const SingleUserPage: FC = () => {
	return (
		<section className={styles.SingleUserPage}>
			<div className={styles.SingleUserPage__user}>
				<UserInfo />
			</div>
			<div className={styles.SingleUserPage__divider}></div>
			<UserLots />
			<Outlet />
		</section>
	);
};

export default SingleUserPage;

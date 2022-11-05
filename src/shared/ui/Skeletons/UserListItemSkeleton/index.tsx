import React from 'react';
import { Skeleton } from '@mui/material';

import itemStyles from 'pages/UsersPage/ui/UserItem/styles.module.scss';
import usersStyles from 'pages/UsersPage/styles.module.scss';
import styles from './styles.module.scss';

const UserListItemSkeleton = () => {
	const skeletons = new Array(12).fill(0).map((_, i) => {
		return (
			<div key={i} className={usersStyles.UsersPage__wrapper}>
				<div className={itemStyles.UserItem + ' ' + styles.UserListItemSkeleton}>
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			</div>
		);
	});

	return <>{skeletons}</>;
};

export default UserListItemSkeleton;

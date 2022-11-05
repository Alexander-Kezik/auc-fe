import { Avatar } from '@mui/material';
import React, { FC } from 'react';

import { User } from 'shared/types/user';

import styles from './styles.module.scss';

interface IProps {
	user: User;
}

const SingleUserItem: FC<IProps> = ({ user }) => {
	return (
		<div className={styles.UserItem}>
			<div className={styles.UserItem__avatar}>
				<Avatar
					sx={{
						backgroundColor: '#00bfff',
						height: '50px',
						width: '50px'
					}}
				>
					{user.name[0]}
				</Avatar>
			</div>
			<div className={styles.UserItem__info}>
				<p className={styles.UserItem__info_item}>Name: {user.name}</p>
				<p className={styles.UserItem__info_item}>Username: {user.username}</p>
				<p className={styles.UserItem__info_item}>Email: {user.email}</p>
			</div>
		</div>
	);
};

export default SingleUserItem;

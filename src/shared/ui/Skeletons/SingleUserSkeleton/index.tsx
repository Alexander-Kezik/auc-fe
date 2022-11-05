import React from 'react';
import { Skeleton } from '@mui/material';

import styles from 'shared/ui/SingleUserItem/styles.module.scss';

const SingleUserSkeleton = () => {
	return (
		<div className={styles.UserItem}>
			<div className={styles.UserItem__avatar}>
				<Skeleton variant='circular' width={50} height={50} />
			</div>
			<div className={styles.UserItem__info}>
				<Skeleton width={200} />
				<Skeleton width={200} />
				<Skeleton width={200} />
			</div>
		</div>
	);
};

export default SingleUserSkeleton;

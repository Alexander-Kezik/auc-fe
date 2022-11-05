import React, { FC } from 'react';

import { Skeleton } from '@mui/material';

import styles from './styles.module.scss';

interface ILotItemSkeletonProps {
	count: number;
	imgHeight: number;
	imgWidth?: number;
}

const LotItemSkeleton: FC<ILotItemSkeletonProps> = ({ count, imgHeight, imgWidth }) => {
	const skeletons = new Array(count).fill(0).map((_, i) => {
		return (
			<div className={styles.LotItemSkeleton} key={i}>
				<Skeleton variant='rectangular' height={imgHeight} width={imgWidth} />
				<div style={{ height: '10px' }}></div>
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</div>
		);
	});

	return <>{skeletons}</>;
};

export default LotItemSkeleton;

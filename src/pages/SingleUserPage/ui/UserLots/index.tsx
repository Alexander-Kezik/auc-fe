import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLotsByEmail } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/Skeletons/LotItemSkeleton';
import LotsList from 'shared/ui/LotsList';

import styles from 'shared/ui/LotsList/styles.module.scss';

const UserLots = () => {
	const { email } = useParams<{ email: string }>();
	const dispatch = useAppDispatch();
	const { lots, loadingState } = useAppSelector(state => state.lots);

	useEffect(() => {
		dispatch(fetchLotsByEmail(String(email)));
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage
				retry={() => dispatch(fetchLotsByEmail(String(email)))}
				msg='can`t load user lots'
			/>
		) : loadingState === LoadingState.LOADING ? (
			<div className={styles.LotsList}>
				<LotItemSkeleton count={4} imgHeight={200} />
			</div>
		) : (
			<LotsList lots={lots} />
		);

	return <div className='container'>{content}</div>;
};

export default UserLots;

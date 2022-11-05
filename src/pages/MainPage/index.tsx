import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import MainPagePromo from './ui/MainPagePromo';
import LotsList from 'shared/ui/LotsList';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchRandomLots } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/Skeletons/LotItemSkeleton';

import styles from './styles.module.scss';
import lotsStyles from 'shared/ui/LotsList/styles.module.scss';

const MainPage: FC = () => {
	const dispatch = useAppDispatch();
	const { loadingState, lots } = useAppSelector(state => state.lots);

	useEffect(() => {
		dispatch(fetchRandomLots());
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage retry={() => dispatch(fetchRandomLots())} />
		) : loadingState === LoadingState.LOADING ? (
			<div className={lotsStyles.LotsList}>
				<LotItemSkeleton count={4} imgHeight={200} />
			</div>
		) : (
			<LotsList lots={lots} />
		);

	return (
		<div className={styles.MainPage}>
			<MainPagePromo />
			<h2 className={styles.MainPage__random}>Random lots: </h2>
			<div className='container'>{content}</div>
			<Outlet />
		</div>
	);
};

export default MainPage;

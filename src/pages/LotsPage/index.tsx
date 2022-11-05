import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import LotsList from 'shared/ui/LotsList';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLots } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/Skeletons/LotItemSkeleton';
import LotsCategories from './ui/LotsCategories';
import Pagination from 'shared/ui/Pagination';
import { changeLotsActivePage } from 'shared/store/slices/lotsSlice';

import styles from './styles.module.scss';
import lotsStyles from 'shared/ui/LotsList/styles.module.scss';

const LotsPage = () => {
	const dispatch = useAppDispatch();
	const { loadingState, lots, countForPage, count, lotsActivePage } = useAppSelector(
		state => state.lots
	);

	const onChangeActivePage = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(fetchLots({ skip: value }));
		dispatch(changeLotsActivePage(value));
	};

	useEffect(() => {
		dispatch(fetchLots({}));
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage retry={() => dispatch(fetchLots({}))} />
		) : loadingState === LoadingState.LOADING ? (
			<div className={lotsStyles.LotsList}>
				<LotItemSkeleton count={4} imgHeight={200} />
			</div>
		) : (
			<LotsList lots={lots} />
		);

	return (
		<>
			<LotsCategories />
			<section className={styles.LotsPage}>
				<h2 className={styles.LotsPage__title}>Lots:</h2>
				<div className='container'>{content}</div>
				<Pagination
					currentPage={lotsActivePage}
					totalCount={count}
					countForPage={countForPage}
					onChange={onChangeActivePage}
				/>
				<Outlet />
			</section>
		</>
	);
};

export default LotsPage;

import React, { FC, useEffect } from 'react';

import LotItem from 'shared/ui/LotsList/ui/LotItem';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLots, fetchRandomLots } from 'shared/store/slices/lotsSlice/thunks';
import { Lot } from 'shared/types/lot';
import { LoadingState } from 'shared/enums/loadingState';
import LotItemSkeleton from 'shared/ui/LotItemSkeleton';
import ErrorMessage from 'shared/ui/ErrorMessage';

import styles from './styles.module.scss';

interface ILotsListProps {
	isRandomList?: boolean;
}

const LotsList: FC<ILotsListProps> = ({ isRandomList }) => {
	const dispatch = useAppDispatch();
	const { loadingState, lots } = useAppSelector(state => state.lots);

	const onLoading = () => {
		isRandomList ? dispatch(fetchRandomLots()) : dispatch(fetchLots());
	};

	useEffect(() => {
		onLoading();
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage retry={onLoading} />
		) : (
			<div className={styles.LotsList}>
				{loadingState === LoadingState.LOADING ? (
					<LotItemSkeleton count={4} imgHeight={200} />
				) : (
					<View lots={lots} />
				)}
			</div>
		);

	return <div className='container'>{content}</div>;
};

interface IViewProps {
	lots: Lot[];
}

const View: FC<IViewProps> = ({ lots }) => {
	return (
		<>
			{lots.map(item => (
				<LotItem lot={item} key={item.id} />
			))}
		</>
	);
};

export default LotsList;

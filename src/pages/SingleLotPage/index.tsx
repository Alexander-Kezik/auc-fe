import React, { FC, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLot } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/LotItemSkeleton';
import LotItem from 'shared/ui/LotsList/ui/LotItem';
import { Routes as Paths } from 'shared/configs/routes';
import AuctionTimer from 'shared/ui/AuctionTimer';
import { Lot } from 'shared/types/lot';

import styles from './styles.module.scss';
import MainButton from '../../shared/ui/MainButton';

const SingleLotPage: FC = () => {
	const { lotId } = useParams<{ lotId: string }>();
	const dispatch = useAppDispatch();
	const {
		singleLot: { lot, username },
		loadingState
	} = useAppSelector(state => state.lots);

	const onFetchLot = (): void => {
		dispatch(fetchLot(String(lotId)));
	};

	useEffect(() => {
		onFetchLot();
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<h2 className={styles.SingleLotPage__error}>
				<ErrorMessage retry={onFetchLot} />
			</h2>
		) : loadingState === LoadingState.LOADING ? (
			<LotItemSkeleton count={1} imgHeight={300} />
		) : (
			<View lotItem={lot} lotOwner={username} />
		);

	return (
		<section className={styles.SingleLotPage}>
			<NavLink className={styles.SingleLotPage__back} to={Paths.LOTS}>
				Go back
			</NavLink>
			<div className='container'>
				<div className={styles.SingleLotPage__wrapper}>{content}</div>
			</div>
		</section>
	);
};

interface IViewProps {
	lotItem: Lot;
	lotOwner: string;
}

const View: FC<IViewProps> = ({ lotItem, lotOwner }) => {
	const onFinishAuc = (): void => {
		console.log('finished');
	};

	return (
		<>
			<LotItem lot={lotItem} isSingle={true} />
			<div className={styles.SingleLotPage__info}>
				<h3 className={styles.SingleLotPage__info__owner}>
					Lot owner: <span className={styles.SingleLotPage__info__owner_username}>{lotOwner}</span>
				</h3>
				<p className={styles.SingleLotPage__info__descr}>
					Minimum increase stake:{' '}
					<span className={styles.SingleLotPage__info__descr_amount}>
						{lotItem.startPrice * 0.1}$
					</span>
				</p>
				<AuctionTimer onFinishAuc={onFinishAuc} timeFrom={lotItem.endDate} />
				<div className={styles.SingleLotPage__info__actions}>
					<MainButton className={styles.SingleLotPage__info__actions_inc}>Increase</MainButton>
					<MainButton className={styles.SingleLotPage__info__actions_buy}>
						Immediate purchase
					</MainButton>
				</div>
			</div>
		</>
	);
};

export default SingleLotPage;

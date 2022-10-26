import React, { FC, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLot } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/LotItemSkeleton';
import LotItem from 'shared/ui/LotsList/ui/LotItem';
import { Routes as Paths } from 'shared/configs/routes';
import { diffDatesAndFindTime } from 'shared/helpers/dateHelpers';

import styles from './styles.module.scss';

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
			<LotItem isSingle={true} lot={lot} />
		);

	return (
		<section className={styles.SingleLotPage}>
			<NavLink className={styles.SingleLotPage__back} to={Paths.LOTS}>
				Go back
			</NavLink>
			<div className='container'>
				<div className={styles.SingleLotPage__wrapper}>
					{content}
					<div className={styles.SingleLotPage__info}>
						<h3 className={styles.SingleLotPage__info__owner}>
							Lot owner:{' '}
							<span className={styles.SingleLotPage__info__owner_username}>{username}</span>
						</h3>
						<p className={styles.SingleLotPage__info__descr}>
							Minimum increase stake:{' '}
							<span className={styles.SingleLotPage__info__descr_amount}>
								{lot.startPrice * 0.1}$
							</span>
							<p className={styles.SingleLotPage__info__descr_time}>
								Time left: {diffDatesAndFindTime(lot.endDate, new Date())}
							</p>
						</p>
						<div className={styles.SingleLotPage__info__actions}>
							<button className={styles.SingleLotPage__info__actions_inc}>Increase</button>
							<button className={styles.SingleLotPage__info__actions_buy}>
								Immediate purchase
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleLotPage;

import React, { FC, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchLot } from 'shared/store/slices/lotsSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import LotItemSkeleton from 'shared/ui/Skeletons/LotItemSkeleton';
import LotItem from 'shared/ui/LotsList/ui/LotItem';
import { Routes as Paths } from 'shared/configs/routes';
import AuctionTimer from 'shared/ui/AuctionTimer';
import { Lot } from 'shared/types/lot';
import MainButton from 'shared/ui/MainButton';
import { compareWithCurrentDate } from 'shared/helpers/dateHelpers';

import styles from './styles.module.scss';

const SingleLotPage: FC = () => {
	const { lotId } = useParams<{ lotId: string }>();
	const dispatch = useAppDispatch();
	const {
		singleLot: { lot, username },
		loadingState
	} = useAppSelector(state => state.lots);

	useEffect(() => {
		dispatch(fetchLot(String(lotId)));
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<h2 className={styles.SingleLotPage__error}>
				<ErrorMessage retry={() => dispatch(fetchLot(String(lotId)))} />
			</h2>
		) : loadingState === LoadingState.LOADING || !username ? (
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
			<Outlet />
		</section>
	);
};

interface IViewProps {
	lotItem: Lot;
	lotOwner: string;
}

const View: FC<IViewProps> = ({ lotItem, lotOwner }) => {
	const [isEnded, setIsEnded] = useState<boolean>(!compareWithCurrentDate(lotItem.endDate));
	const cn = classNames.bind(styles);

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
				<AuctionTimer onFinish={() => setIsEnded(true)} timeFrom={new Date('11-4-2022 13:59:22')} />
				<div className={styles.SingleLotPage__info__actions}>
					<MainButton
						className={cn(styles.SingleLotPage__info__actions_inc, {
							['disabled']: isEnded
						})}
						disabled={isEnded}
					>
						Increase
					</MainButton>
					<MainButton
						className={cn(styles.SingleLotPage__info__actions_buy, { ['disabled']: isEnded })}
						disabled={isEnded}
					>
						Immediate purchase
					</MainButton>
				</div>
			</div>
		</>
	);
};

export default SingleLotPage;

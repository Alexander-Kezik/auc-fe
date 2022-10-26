import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { convertDateToString } from 'shared/helpers/dateHelpers';
import { Lot } from 'shared/types/lot';
import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

interface IProps {
	lot: Lot;
	isSingle?: boolean;
}

const LotItem: FC<IProps> = ({ lot, isSingle }) => {
	const cn = classNames.bind(styles);
	const { id, lotName, startPrice, currentPrice, immediatePurchasePrice, startDate, endDate } = lot;

	return (
		<NavLink to={`${Paths.LOTS}/${id}`} tabIndex={1} className={styles.LotItem}>
			<div className={cn(styles.LotItem__img, { ['big']: isSingle })}>
				<img
					className={styles.LotItem__img_item}
					src={'https://m.media-amazon.com/images/I/61AwGDDZd3L._SX522_.jpg'}
					alt='auction item'
				/>
			</div>
			<p className={styles.LotItem__text}>Lot name: {lotName}</p>
			<p className={styles.LotItem__text}>Start price: {startPrice}$</p>
			<p className={styles.LotItem__text}>Current price: {currentPrice}$</p>
			<p className={styles.LotItem__text}>Immediate purchase: {immediatePurchasePrice}$</p>
			<p className={styles.LotItem__text}>Start date: {convertDateToString(startDate)}</p>
			<p className={styles.LotItem__text}>End date: {convertDateToString(endDate)}</p>
		</NavLink>
	);
};

export default LotItem;

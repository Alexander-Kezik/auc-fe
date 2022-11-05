import React, { FC } from 'react';

import LotItem from 'shared/ui/LotsList/ui/LotItem';
import { Lot } from 'shared/types/lot';
import SortByPriceDesc from './ui/SortByPriceDesc';
import SortByPriceAsc from './ui/SortByPriceAsc';

import styles from './styles.module.scss';

interface IProps {
	lots: Lot[];
}

const LotsList: FC<IProps> = ({ lots }) => {
	const content = lots.map(item => <LotItem lot={item} key={item.id} />);

	return (
		<>
			{content.length ? (
				<>
					<div className={styles.LotsList__sorters}>
						<SortByPriceDesc />
						<SortByPriceAsc />
					</div>
					<div className={styles.LotsList}>{content}</div>
				</>
			) : (
				<h2 className={styles.LotsList__notfound}>Lots were not found for your request</h2>
			)}
		</>
	);
};

export default LotsList;

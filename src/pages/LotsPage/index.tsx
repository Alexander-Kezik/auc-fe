import React from 'react';

import LotsList from 'shared/ui/LotsList';
import LotsCategories from './ui/LotsCategories';

import styles from './styles.module.scss';

const LotsPage = () => {
	return (
		<>
			<LotsCategories />
			<h2 className={styles.LotsPage__title}>Lots:</h2>
			<LotsList />
		</>
	);
};

export default LotsPage;

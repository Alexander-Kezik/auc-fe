import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import MainPagePromo from './ui/MainPagePromo';

import styles from './styles.module.scss';
import LotsList from 'shared/ui/LotsList';

const MainPage: FC = () => {
	return (
		<>
			<MainPagePromo />
			<h2 className={styles.MainPage__random}>Random lots: </h2>
			<LotsList isRandomList={true} />
			<Outlet />
		</>
	);
};

export default MainPage;

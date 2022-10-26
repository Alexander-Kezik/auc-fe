import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Routes as Paths } from 'shared/configs/routes';

import MainPage from 'pages/MainPage';
import LotsPage from 'pages/LotsPage';
import SingleLotPage from 'pages/SingleLotPage';

const Pages: FC = () => {
	return (
		<Routes>
			<Route path={Paths.HOME} element={<MainPage />} />
			<Route path={Paths.LOTS} element={<LotsPage />} />
			<Route path={Paths.LOT} element={<SingleLotPage />} />
			<Route path={Paths.NOT_FOUND_PAGE} element={<h1>Hot found</h1>} />
		</Routes>
	);
};

export default Pages;

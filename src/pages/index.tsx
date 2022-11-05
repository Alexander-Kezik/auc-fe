import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Routes as Paths } from 'shared/configs/routes';

import MainPage from 'pages/MainPage';
import LotsPage from 'pages/LotsPage';
import SingleLotPage from 'pages/SingleLotPage';
import SupportModal from 'pages/SupportModal';
import SignIn from 'pages/AuthPages/SignInPage';
import SignUp from 'pages/AuthPages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';
import UsersPage from 'pages/UsersPage';
import SingleUserPage from 'pages/SingleUserPage';
import ProfilePage from 'pages/ProfilePage';
import EditCredentialsModal from 'pages/EditCredentialsModal';
import TopUpModal from 'pages/TopUpModal';

const Pages: FC = () => {
	return (
		<Routes>
			<Route path={Paths.HOME} element={<MainPage />}>
				<Route path={Paths.SUPPORT} element={<SupportModal />} />
				<Route path={Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.SIGNIN} element={<SignIn />} />
			<Route path={Paths.SIGNUP} element={<SignUp />} />
			<Route path={Paths.LOTS} element={<LotsPage />}>
				<Route path={Paths.LOTS + Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.LOT} element={<SingleLotPage />}>
				<Route path={Paths.LOT + Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.USERS} element={<UsersPage />}>
				<Route path={Paths.USERS + Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.USER} element={<SingleUserPage />}>
				<Route path={Paths.USER + Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.PAGE_PROFILE} element={<ProfilePage />}>
				<Route
					path={Paths.PAGE_PROFILE + '/' + Paths.EDIT_CREDENTIALS}
					element={<EditCredentialsModal />}
				/>
				<Route path={Paths.PAGE_PROFILE + Paths.TOP_UP} element={<TopUpModal />} />
			</Route>
			<Route path={Paths.ANY} element={<NotFoundPage />} />
		</Routes>
	);
};

export default Pages;

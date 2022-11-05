import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchUser } from 'shared/store/slices/usersSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import SingleUserItem from 'shared/ui/SingleUserItem';
import SingleUserSkeleton from 'shared/ui/Skeletons/SingleUserSkeleton';
import ChangePermissions from '../ChangePermissions';
import ChangeStatus from '../ChangeStatus';

const UserInfo: FC = () => {
	const { email } = useParams<{ email: string }>();
	const dispatch = useAppDispatch();
	const { user, loadingState } = useAppSelector(state => state.users);

	useEffect(() => {
		dispatch(fetchUser(String(email)));
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage retry={() => fetchUser(String(email))} msg='can`t load user info' />
		) : loadingState === LoadingState.LOADING || !user.username ? (
			<SingleUserSkeleton />
		) : (
			<SingleUserItem user={user} />
		);

	return (
		<div className='container'>
			{content}
			<ChangePermissions />
			<ChangeStatus />
		</div>
	);
};

export default UserInfo;

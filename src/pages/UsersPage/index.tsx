import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchUsers } from 'shared/store/slices/usersSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import ErrorMessage from 'shared/ui/ErrorMessage';
import UserItem from './ui/UserItem';
import { User } from 'shared/types/user';
import Pagination from 'shared/ui/Pagination';
import { changeUsersActivePage } from 'shared/store/slices/usersSlice';
import Search from 'shared/ui/Search';
import UserListItemSkeleton from 'shared/ui/Skeletons/UserListItemSkeleton';

import styles from './styles.module.scss';

const UsersPage: FC = () => {
	const dispatch = useAppDispatch();
	const { users, count, loadingState, usersActivePage, countForPage } = useAppSelector(
		state => state.users
	);

	useEffect(() => {
		dispatch(fetchUsers({}));
	}, []);

	const onChangeActivePage = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(fetchUsers({ skip: value }));
		dispatch(changeUsersActivePage(value));
	};

	const content =
		loadingState === LoadingState.ERROR ? (
			<ErrorMessage retry={() => dispatch(fetchUsers({}))} />
		) : loadingState === LoadingState.LOADING ? (
			<UserListItemSkeleton />
		) : (
			<View users={users} />
		);

	return (
		<section className={styles.UsersPage}>
			<div className='container'>
				<h2 className={styles.UsersPage__title}>Users:</h2>
				{content}
				<Pagination
					totalCount={count}
					countForPage={countForPage}
					onChange={onChangeActivePage}
					currentPage={usersActivePage}
				/>
			</div>
			<Outlet />
		</section>
	);
};

interface IViewProps {
	users: User[];
}

const View: FC<IViewProps> = ({ users }) => {
	const content = users.map(({ name, email, username }) => {
		return <UserItem key={username} name={name} email={email} username={username} />;
	});

	return (
		<>
			<Search color={'black'} />
			<div className={styles.UsersPage__wrapper}>{content}</div>
		</>
	);
};

export default UsersPage;

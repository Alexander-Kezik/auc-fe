import React, { FC } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from 'shared/hooks/reduxAppHooks';
import SingleUserItem from 'shared/ui/SingleUserItem';
import UserLots from 'pages/SingleUserPage/ui/UserLots';
import { User } from 'shared/types/user';
import { Routes as Paths } from 'shared/configs/routes';
import MainButton from 'shared/ui/MainButton';

import styles from './styles.module.scss';

const ProfilePage: FC = () => {
	const { user } = useAppSelector(state => state.auth);
	const { email } = useParams();

	const content =
		email === user.email ? <View user={user} /> : <Navigate replace to={Paths.HOME} />;

	return (
		<section className={styles.ProfilePage}>
			<div className='container'>{content}</div>
			<Outlet />
		</section>
	);
};

interface IViewProps {
	user: User;
}

const View: FC<IViewProps> = ({ user }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.ProfilePage__item}>
			<SingleUserItem user={user} />
			<MainButton onClick={() => navigate('edit')} className={styles.ProfilePage__edit}>
				Edit profile
			</MainButton>
			<div className={styles.ProfilePage__divider}></div>
			<UserLots />
		</div>
	);
};

export default ProfilePage;

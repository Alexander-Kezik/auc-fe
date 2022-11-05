import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

import gif404 from 'shared/assets/gifs/error404.gif';

const NotFoundPage: FC = () => {
	return (
		<section className={styles.NotFoundPage}>
			<h2 className={styles.NotFoundPage__message}>Page not found</h2>
			<div className={styles.NotFoundPage__wrapper}>
				<img src={gif404} alt='error gif' />
			</div>
			<Link className={styles.NotFoundPage__link} to={Paths.HOME}>
				To main page
			</Link>
		</section>
	);
};

export default NotFoundPage;

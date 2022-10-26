import React, { FC, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { fetchCategories } from 'shared/store/slices/categoriesSlice/thunks';
import { LoadingState } from 'shared/enums/loadingState';
import { Category } from 'shared/types/category';

import styles from './styles.module.scss';
import { Skeleton } from '@mui/material';

const LotsCategories: FC = () => {
	const dispatch = useAppDispatch();
	const { categories, loadingState } = useAppSelector(state => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	const content =
		loadingState === LoadingState.ERROR ? (
			<h2 className={styles.LotsCategories__error}>
				Error... Can&#39;t load categories from server...
			</h2>
		) : (
			<div className={styles.LotsList}>
				{loadingState === LoadingState.LOADING ? (
					<Skeleton sx={{ bgcolor: '#ffffff' }} />
				) : (
					<View categories={categories} />
				)}
			</div>
		);

	return (
		<aside className={styles.LotsCategories}>
			<div className='container'>{content}</div>
		</aside>
	);
};

interface IViewProps {
	categories: Category[];
}

const View: FC<IViewProps> = ({ categories }) => {
	const cn = classNames.bind(styles);

	const onChangeCategory = (e: React.MouseEvent<HTMLElement>) => {
		e.currentTarget.className = cn(styles.LotsCategories__wrapper__param, {
			['active']: false
		});
	};

	return (
		<ul className={styles.LotsCategories__wrapper}>
			{categories.map(({ name, id }) => {
				return (
					<li
						onClick={onChangeCategory}
						className={styles.LotsCategories__wrapper__param}
						value={id}
						key={id}
					>
						{name[0].toLocaleUpperCase() + name.slice(1)}
					</li>
				);
			})}
		</ul>
	);
};

export default LotsCategories;

import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { useAppSelector } from 'shared/hooks/reduxAppHooks';
import { LoadingState } from 'shared/enums/loadingState';
import { Category } from 'shared/types/category';
import Search from 'shared/ui/Search';

import styles from './styles.module.scss';

const LotsCategories: FC = () => {
	const { categories, categoriesLoadingState } = useAppSelector(state => state.categories);
	const { loadingState } = useAppSelector(state => state.lots);

	const content =
		categoriesLoadingState === LoadingState.ERROR ? (
			<h2 className={styles.LotsCategories__error}>
				Error... Can&#39;t load categories from server...
			</h2>
		) : (
			<View categories={categories} />
		);

	return (
		<aside className={styles.LotsCategories}>
			<div className='container'>
				<div className={styles.LotsCategories__flex}>
					{content}
					{loadingState === LoadingState.LOADED && <Search />}
				</div>
			</div>
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

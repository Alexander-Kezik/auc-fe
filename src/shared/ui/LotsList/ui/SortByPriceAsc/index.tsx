import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { IconButton } from '@mui/material';

import styles from './styles.module.scss';

const SortByPriceDesc = () => {
	return (
		<IconButton
			sx={{ marginLeft: '20px' }}
			onClick={() => console.log('sort by asc')}
			className={styles.SortByPriceDesc}
		>
			<div className={styles.SortByPriceDesc__wrapper}>
				<ArrowDropUpIcon sx={{ color: 'green', fontSize: '40px' }} />
				<LocalAtmIcon
					sx={{ color: 'green', position: 'relative', top: '-15px', fontSize: '30px' }}
				/>
			</div>
		</IconButton>
	);
};

export default SortByPriceDesc;

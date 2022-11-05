import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { IconButton } from '@mui/material';

import styles from './styles.module.scss';

const SortByPriceDesc = () => {
	return (
		<IconButton onClick={() => console.log('sort by desc')} className={styles.SortByPriceDesc}>
			<div className={styles.SortByPriceDesc__wrapper}>
				<LocalAtmIcon sx={{ color: 'red', position: 'relative', top: '15px', fontSize: '30px' }} />
				<ArrowDropDownIcon sx={{ color: 'red', fontSize: '40px' }} />
			</div>
		</IconButton>
	);
};

export default SortByPriceDesc;

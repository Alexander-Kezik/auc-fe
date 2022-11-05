import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Tooltip } from '@mui/material';

import { Routes as Paths } from 'shared/configs/routes';

import styles from './styles.module.scss';

const Balance = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className={styles.Balance}>
			<div className={styles.Balance__icons}>
				<Tooltip title='4000$' placement='left'>
					<AccountBalanceWalletOutlinedIcon sx={{ fontSize: '40px' }} />
				</Tooltip>
				<ControlPointIcon
					className={styles.Balance__icons__plus}
					sx={{
						cursor: 'pointer',
						position: 'absolute',
						fontSize: '20px',
						right: 0,
						bottom: 0,
						backgroundColor: '#282828',
						borderRadius: '10px'
					}}
					onClick={() =>
						navigate(location.pathname === '/' ? Paths.TOP_UP : location.pathname + Paths.TOP_UP)
					}
				/>
			</div>
		</div>
	);
};

export default Balance;

import React, { FC } from 'react';

import MainButton from 'shared/ui/MainButton';

import styles from './styles.module.scss';

const ChangeStatus: FC = () => {
	const banned: boolean = true;

	return (
		<div className={styles.ChangeStatus}>
			{banned ? (
				<MainButton onClick={() => console.log('unban')} className={styles.ChangeStatus__unban}>
					Unban
				</MainButton>
			) : (
				<MainButton onClick={() => console.log('ban')} className={styles.ChangeStatus__ban}>
					Ban
				</MainButton>
			)}
		</div>
	);
};

export default ChangeStatus;

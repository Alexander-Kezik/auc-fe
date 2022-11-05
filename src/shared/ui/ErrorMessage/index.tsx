import React, { FC } from 'react';

import styles from './styles.module.scss';

interface IProps {
	retry(): void;

	msg?: string;
}

const ErrorMessage: FC<IProps> = ({ retry, msg }) => {
	return (
		<div className={styles.ErrorMessage}>
			<div className={styles.ErrorMessage__face}>
				<div className={styles.ErrorMessage__face__eye}></div>
				<div className={styles.ErrorMessage__face__eye} style={{ left: '68%' }}></div>
				<div className={styles.ErrorMessage__face__mouth}></div>
			</div>
			<div className={styles.ErrorMessage__shadow}></div>
			<div className={styles.ErrorMessage__message}>
				<h2 className={styles.ErrorMessage__message_title}>Error!</h2>
				<p className={styles.ErrorMessage__message_text}>
					{msg ? msg : 'oh no, something went wrong.'}
				</p>
			</div>
			<button onClick={retry} className={styles.ErrorMessage__button}>
				TRY AGAIN
			</button>
		</div>
	);
};

export default ErrorMessage;

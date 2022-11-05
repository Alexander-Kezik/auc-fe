import React, { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface IProps {
	timeFrom: string | Date;
	onFinish: () => void;
}

const AuctionTimer: FC<IProps> = ({ timeFrom, onFinish }) => {
	const parsedTimeFrom = new Date(timeFrom).getTime();
	const [time, setTime] = useState<number>(parsedTimeFrom - Date.now());

	const finishAuc = (interval: NodeJS.Timer) => {
		clearInterval(interval);
		setTime(0);
		onFinish();
	};

	useEffect(() => {
		const interval = setInterval(() => {
			parsedTimeFrom - Date.now() <= 0 ? finishAuc(interval) : setTime(parsedTimeFrom - Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.Timer}>
			<p className={styles.Timer__text}>
				Time left:{' '}
				{time > 0 ? (
					<span className={styles.Timer__time}>
						{Math.floor(time / DAY) ? Math.floor(time / DAY) + ' days ' : ''}
						{Math.floor((time / HOUR) % 24) ? Math.floor((time / HOUR) % 24) + ' hours ' : ''}
						{Math.floor((time / MINUTE) % 60) ? Math.floor((time / MINUTE) % 60) + ' minutes ' : ''}
						{Math.floor((time / SECOND) % 60) + ' seconds'}
					</span>
				) : (
					'Auction ended'
				)}
			</p>
		</div>
	);
};

export default AuctionTimer;

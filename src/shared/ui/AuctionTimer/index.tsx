import React, { FC, useEffect, useState } from 'react';

import { LoadingState } from 'shared/enums/loadingState';

import styles from './styles.module.scss';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface IProps {
	timeFrom: string | Date;
	onFinishAuc: () => void;
}

const AuctionTimer: FC<IProps> = ({ timeFrom, onFinishAuc }) => {
	const parsedTimeFrom = Date.parse(new Date(timeFrom).toString());
	const [time, setTime] = useState<number>(parsedTimeFrom - Date.now());
	const [timerState, setTimerState] = useState<LoadingState>(LoadingState.LOADING);

	const finishAuc = (interval: NodeJS.Timer) => {
		setTimerState(LoadingState.ERROR);
		clearInterval(interval);
		onFinishAuc();
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTimerState(LoadingState.LOADED);
			parsedTimeFrom - Date.now() <= 0 ? finishAuc(interval) : setTime(parsedTimeFrom - Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<p className={styles.Timer}>
			{timerState === LoadingState.LOADING
				? 'Time left: Loading...'
				: timerState === LoadingState.LOADED
				? `Time left: ${Math.floor(time / DAY)}:${Math.floor((time / HOUR) % 24)}:
		${Math.floor((time / MINUTE) % 60)}:${Math.floor((time / SECOND) % 60)}`
				: 'Auction ended'}
		</p>
	);
};

export default AuctionTimer;

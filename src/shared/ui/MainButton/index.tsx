import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
	className: string;
	children: ReactNode;
	type?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const MainButton: FC<IProps> = ({ className, children, type }) => {
	return (
		<button type={type ? 'button' : type} className={`${styles.MainButton} ${className}`}>
			{children}
		</button>
	);
};

export default MainButton;

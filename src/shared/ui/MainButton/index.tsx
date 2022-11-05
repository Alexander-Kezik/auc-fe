import React, { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
	className: string;
	children: ReactNode;
	type?: string;
	onClick?: () => any;
	disabled?: boolean;
}

const MainButton: FC<IProps> = ({ className, children, type, onClick, ...props }) => {
	return (
		<button
			onClick={onClick}
			type={type === 'submit' ? 'submit' : 'button'}
			className={`${styles.MainButton} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default MainButton;

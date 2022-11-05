import React, { FC } from 'react';
import { useField } from 'formik';
import classNames from 'classnames/bind';
import ReactTooltip from 'react-tooltip';

import styles from './styles.module.scss';

interface IProps {
	label?: string;
	id: string;
	name: string;
	placeholder: string;
	type?: string;
	autoComplete?: string;
	className?: string;
}

const TextInput: FC<IProps> = ({ label, className, ...props }) => {
	const cn = classNames.bind(styles);
	const [field, meta] = useField(props);

	return (
		<>
			{label && (
				<label className={styles.TextInput__label} htmlFor={props.name}>
					{label}:
				</label>
			)}
			<div className={styles.TextInput__wrapper}>
				<input
					{...props}
					{...field}
					className={cn(
						styles.TextInput__input,
						{ ['error']: meta.touched && meta.error },
						{ ['' + className]: className }
					)}
				/>
				{meta.touched && meta.error && (
					<>
						<div data-for={label} className={styles.TextInput__error} data-tip={meta.error}>
							❕
						</div>
						<ReactTooltip id={label} effect='solid' type='error' />
					</>
				)}
			</div>
		</>
	);
};

export default TextInput;

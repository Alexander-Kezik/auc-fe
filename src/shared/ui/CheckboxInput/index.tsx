import React, { FC } from 'react';
import { useField } from 'formik';
import ReactTooltip from 'react-tooltip';

import styles from './styles.module.scss';

interface IProps {
	label: string;
	name: string;
	id: string;
}

const CheckboxInput: FC<IProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className={styles.CheckboxInput__wrapper}>
			<input {...props} {...field} type='checkbox' className={styles.CheckboxInput__checkbox} />
			<label htmlFor={props.name} className={styles.CheckboxInput__label}>
				{label}
			</label>
			{meta.touched && meta.error && (
				<>
					<div data-for={label} className={styles.CheckboxInput__error} data-tip={meta.error}>
						❕
					</div>
					<ReactTooltip id={label} effect='solid' type='error' />
				</>
			)}
		</div>
	);
};

export default CheckboxInput;

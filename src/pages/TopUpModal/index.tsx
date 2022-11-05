import React, { useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { initialValues, validationSchema } from './lib';
import TextInput from 'shared/ui/TextInput';
import MainButton from 'shared/ui/MainButton';

import styles from './styles.module.scss';

const TopUpModal = () => {
	const navigate = useNavigate();
	const elToInitFocus = useRef<HTMLDivElement>(null);

	useEffect(() => {
		elToInitFocus.current && elToInitFocus.current.focus();
	}, []);

	return (
		<div
			tabIndex={-1}
			ref={elToInitFocus}
			onKeyDown={e => e.key === 'Escape' && navigate(-1)}
			className={styles.TopUpModal__bg}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.TopUpModal}>
					<div onClick={() => navigate(-1)} className={styles.TopUpModal__cross}>
						&#x2716;
					</div>
					<TextInput
						autoComplete='off'
						label='Amount'
						name='amount'
						id='amount'
						placeholder='amount'
					/>
					<MainButton type={'submit'} className={styles.TopUpModal__btn}>
						Top up
					</MainButton>
				</Form>
			</Formik>
		</div>
	);
};

export default TopUpModal;

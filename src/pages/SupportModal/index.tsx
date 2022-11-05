import React, { useEffect, useRef } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import MainButton from 'shared/ui/MainButton';
import TextInput from 'shared/ui/TextInput';
import { initialValues, validationSchema } from './lib';

import styles from './styles.module.scss';

const SupportModal = () => {
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
			className={styles.SupportModal__bg}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.SupportModal}>
					<div onClick={() => navigate(-1)} className={styles.SupportModal__cross}>
						&#x2716;
					</div>
					<TextInput
						autoComplete='off'
						label='Message'
						name='message'
						id='message'
						placeholder='message'
					/>
					<MainButton type='submit' className={styles.SupportModal__btn}>
						Send
					</MainButton>
				</Form>
			</Formik>
		</div>
	);
};

export default SupportModal;

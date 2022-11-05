import React, { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { initialValues, validationSchema } from './lib';
import TextInput from 'shared/ui/TextInput';
import MainButton from 'shared/ui/MainButton';

import styles from './styles.module.scss';

const EditCredentialsModal: FC = () => {
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
			className={styles.EditCredentialsModal__bg}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.EditCredentialsModal}>
					<div onClick={() => navigate(-1)} className={styles.EditCredentialsModal__cross}>
						&#x2716;
					</div>
					<TextInput
						autoComplete='off'
						label='username'
						name='username'
						id='username'
						placeholder='username'
					/>
					<TextInput autoComplete='off' label='name' name='name' id='name' placeholder='name' />
					<MainButton type={'submit'} className={styles.EditCredentialsModal__btn}>
						Edit profile
					</MainButton>
				</Form>
			</Formik>
		</div>
	);
};

export default EditCredentialsModal;

import React from 'react';
import { Formik, Form } from 'formik';

import MainButton from 'shared/ui/MainButton';
import TextInput from 'shared/ui/TextInput';
import { initialValues, validationSchema } from './lib';

import styles from './styles.module.scss';

const SupportModal = () => {
	return (
		<div className={styles.SupportModal__bg}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.SupportModal}>
					<TextInput label='Message' name='message' id='message' placeholder='message' />
					<MainButton className={styles.SupportModal__btn}>Send</MainButton>
				</Form>
			</Formik>
		</div>
	);
};

export default SupportModal;

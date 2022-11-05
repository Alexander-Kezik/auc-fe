import React, { FC } from 'react';
import { Formik, Form } from 'formik';

import { initialValues, validationSchema } from './lib';
import TextInput from 'shared/ui/TextInput';
import MainButton from 'shared/ui/MainButton';
import CredentialsLinks from 'pages/AuthPages/ui/CredentialsLinks';
import CheckboxInput from 'shared/ui/CheckboxInput';

import styles from './styles.module.scss';

const SignUpPage: FC = () => {
	return (
		<section className={styles.SignUpPage}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.SignUpPage__form}>
					<CredentialsLinks />
					<div className={styles.SignUpPage__form__inputs}>
						<TextInput label='Username' name='username' id='username' placeholder='username' />
						<TextInput label='Name' name='name' id='name' placeholder='name' />
						<TextInput label='Email' name='email' id='email' placeholder='email' />
						<TextInput
							label='Password'
							type='password'
							name='password'
							id='password'
							placeholder='password (8-16 symbols)'
						/>
						<TextInput
							label='Confirm password'
							type='password'
							name='confirm_password'
							id='confirm_password'
							placeholder='confirm password'
						/>
						<CheckboxInput
							label='By creating an account you agree to the terms and conditions applicable to our service and acknowledge that your personal data will be used in accordance with our privacy policy and you will receive emails and communications about jobs, industry news, new products and related topics.'
							name='confirm_policy'
							id='confirm_policy'
						/>
					</div>
					<MainButton className={styles.SignUpPage__form__btn} type='submit'>
						Sign up
					</MainButton>
				</Form>
			</Formik>
		</section>
	);
};

export default SignUpPage;

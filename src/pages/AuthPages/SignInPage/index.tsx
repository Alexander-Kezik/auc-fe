import React, { FC, useEffect } from 'react';
import { Form, Formik } from 'formik';

import { initialValues, validationSchema } from './lib';
import TextInput from 'shared/ui/TextInput';
import MainButton from 'shared/ui/MainButton';
import CredentialsLinks from 'pages/AuthPages/ui/CredentialsLinks';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxAppHooks';
import { signIn } from 'shared/store/slices/authSlice/thunks';

import styles from './styles.module.scss';

const SignInPage: FC = () => {
	const dispatch = useAppDispatch();

	const a = useAppSelector(state => state.auth);

	useEffect(() => {
		console.log(a);
	}, [a]);

	return (
		<section className={styles.SignInPage}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values): void => {
					dispatch(signIn(values));
				}}
				validationSchema={validationSchema}
			>
				<Form className={styles.SignInPage__form}>
					<CredentialsLinks />
					<div className={styles.SignInPage__form__inputs}>
						<TextInput label='Email' name='email' id='email' placeholder='email' />
						<TextInput
							label='Password'
							name='password'
							type='password'
							id='password'
							placeholder='password (8-16 symbols)'
						/>
					</div>
					<MainButton className={styles.SignInPage__form__btn} type='submit'>
						Sign in
					</MainButton>
				</Form>
			</Formik>
		</section>
	);
};

export default SignInPage;

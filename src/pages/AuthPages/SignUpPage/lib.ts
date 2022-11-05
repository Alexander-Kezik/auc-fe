import * as Yup from 'yup';

import { Registration } from 'shared/types/credentials';

export const initialValues: Registration = {
	username: '',
	name: '',
	password: '',
	email: '',
	confirm_password: '',
	confirm_policy: false
};

export const validationSchema = Yup.object({
	username: Yup.string()
		.required('username is a required field')
		.min(3, '3-30 symbols')
		.max(30, '3-30 symbols'),
	name: Yup.string()
		.required('name is a required field')
		.min(3, '3-30 symbols')
		.max(30, '3-30 symbols'),
	email: Yup.string()
		.required('email is a required field')
		.min(8, '8-50 symbols')
		.max(50, '8-50 symbols'),
	password: Yup.string()
		.required('password is a required field')
		.min(8, '8-16 symbols')
		.max(16, '8-16 symbols'),
	confirm_password: Yup.string()
		.required('confirm password is a required field')
		.oneOf([Yup.ref('password'), null], 'passwords do not match'),
	confirm_policy: Yup.boolean().oneOf([true], 'confirmation of our policy is required')
});

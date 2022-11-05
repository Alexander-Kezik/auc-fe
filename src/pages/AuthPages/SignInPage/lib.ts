import * as Yup from 'yup';

import { Authorization } from 'shared/types/credentials';

export const initialValues: Authorization = {
	email: '',
	password: ''
};

export const validationSchema = Yup.object({
	email: Yup.string()
		.required('email is a required field')
		.min(8, '8-50 symbols')
		.max(50, '8-50 symbols'),
	password: Yup.string()
		.required('password is a required field')
		.min(8, '8-16 symbols')
		.max(16, '8-16 symbols')
});

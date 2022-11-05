import * as Yup from 'yup';

import { EditCredentials } from 'shared/types/credentials';

export const initialValues: EditCredentials = {
	username: '',
	name: ''
};

export const validationSchema = Yup.object().shape({
	username: Yup.string().min(3, '3-30 symbols').max(30, '3-30 symbols'),
	name: Yup.string().min(3, '3-30 symbols').max(30, '3-30 symbols')
});

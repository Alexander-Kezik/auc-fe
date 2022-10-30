import * as Yup from 'yup';

import { SupportMsg } from 'shared/types/support-msg';

export const initialValues: SupportMsg = {
	message: ''
};

export const validationSchema = Yup.object({
	message: Yup.string()
		.required('Message is required field')
		.min(20, '20-250 symbols')
		.max(250, '20-250 symbols')
});

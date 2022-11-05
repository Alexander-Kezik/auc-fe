import * as Yup from 'yup';

export const initialValues: { role: string } = {
	role: ''
};

export const validationSchema = Yup.object({
	role: Yup.string().required('Message is required field')
});

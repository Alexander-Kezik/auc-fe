import * as Yup from 'yup';

export const initialValues: { amount: number } = {
	amount: 0
};

export const validationSchema = Yup.object({
	amount: Yup.number()
		.required('Amount is required field')
		.min(1, '1$ - 999999$')
		.max(999999, '1$ - 999999$')
});

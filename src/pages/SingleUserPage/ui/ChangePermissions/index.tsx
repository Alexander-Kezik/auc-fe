import React, { FC, useState } from 'react';
import { Form, Formik } from 'formik';
import { initialValues, validationSchema } from './lib';

import MainButton from 'shared/ui/MainButton';
import SelectInput from 'shared/ui/SelectInput';

import styles from './styles.module.scss';

enum Actions {
	RETRIEVE = 'retrieve',
	GIVE = 'give'
}

const ChangePermissions: FC = () => {
	const [action, setAction] = useState<string>(Actions.GIVE);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values): void => {
				console.log(action);
				console.log(values);
			}}
		>
			<Form className={styles.ChangePermissions}>
				<SelectInput label='Permissions' name='role' values={['Admin', 'Operator']}></SelectInput>
				<MainButton
					onClick={() => setAction(Actions.GIVE)}
					type='submit'
					className={styles.ChangePermissions__give}
				>
					Give
				</MainButton>
				<MainButton
					onClick={() => setAction(Actions.RETRIEVE)}
					type='submit'
					className={styles.ChangePermissions__retrieve}
				>
					Retrieve
				</MainButton>
			</Form>
		</Formik>
	);
};

export default ChangePermissions;

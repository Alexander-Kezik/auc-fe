import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { initialValues, validationSchema } from './lib';
import TextInput from 'shared/ui/TextInput';

import styles from './styles.module.scss';

interface IProps {
	color?: string;
}

const LotSearch: FC<IProps> = ({ color = 'white' }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => {
				console.log(values);
			}}
		>
			<Form className={styles.LotSearch}>
				<TextInput
					className={styles.LotSearch__input}
					id='searchQuery'
					name='searchQuery'
					placeholder='Search...'
				/>
				<IconButton sx={{ marginLeft: '20px', color }} type={'submit'}>
					<SearchIcon />
				</IconButton>
			</Form>
		</Formik>
	);
};

export default LotSearch;

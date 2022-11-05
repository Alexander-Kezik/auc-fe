import React, { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Field } from 'formik';

interface IProps {
	label: string;
	name: string;
	values: string[];
	width?: number;
}

const SelectInput: FC<IProps> = ({ values, label, width = 150, ...props }) => {
	const menuItems = values.map(item => {
		return (
			<MenuItem key={item} value={item}>
				{item}
			</MenuItem>
		);
	});

	return (
		<FormControl sx={{ m: 1, width }} size='small'>
			<InputLabel id='demo-simple-select-label'>Permissions</InputLabel>
			<Field name={props.name} label={label} component={CustomSelect}>
				<MenuItem sx={{ color: 'grey' }} value=''>
					None
				</MenuItem>
				{menuItems}
			</Field>
		</FormControl>
	);
};

interface ICustomSelect {
	children: React.ReactNode;
	field: {
		name: string;
		value: string;
	};
	form: { setFieldValue: (name: string, value: string) => void };
	label: string;
}

const CustomSelect: FC<ICustomSelect> = ({ label, children, form, field }) => {
	const { name, value } = field;
	const { setFieldValue } = form;

	return (
		<Select
			name={name}
			value={value}
			label={label}
			onChange={e => {
				setFieldValue(name, e.target.value);
			}}
		>
			{children}
		</Select>
	);
};

export default SelectInput;

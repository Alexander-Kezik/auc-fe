import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from 'shared/types/category';
import CategoryService from 'shared/api/category';

export const fetchCategories = createAsyncThunk<Category[]>(
	'categories/fetchCategories',
	async () => {
		return await CategoryService.getCategories();
	}
);

import { createSlice } from '@reduxjs/toolkit';

import { Category } from 'shared/types/category';
import { LoadingState } from 'shared/enums/loadingState';
import { fetchCategories } from './thunks';

export type CategoriesState = {
	categories: Category[];
	categoriesLoadingState: LoadingState;
};

const initialState: CategoriesState = {
	categories: [],
	categoriesLoadingState: LoadingState.LOADING
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.categoriesLoadingState = LoadingState.LOADED;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.pending, state => {
				state.categoriesLoadingState = LoadingState.LOADING;
			})
			.addCase(fetchCategories.rejected, state => {
				state.categoriesLoadingState = LoadingState.ERROR;
			});
	}
});

const { actions, reducer } = categoriesSlice;

export default reducer;

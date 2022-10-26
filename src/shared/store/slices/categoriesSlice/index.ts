import { createSlice } from '@reduxjs/toolkit';

import { Category } from 'shared/types/category';
import { LoadingState } from 'shared/enums/loadingState';
import { fetchCategories } from './thunks';
import { isErrorMatcher, isPendingMatcher } from 'shared/store/slices/matchers/matchers';

export {};

type CategoriesState = {
	categories: Category[];
	loadingState: LoadingState;
};

const initialState: CategoriesState = {
	categories: [],
	loadingState: LoadingState.LOADING
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.loadingState = LoadingState.LOADED;
				state.categories = action.payload;
			})
			.addMatcher(isPendingMatcher, state => {
				state.loadingState = LoadingState.LOADING;
			})
			.addMatcher(isErrorMatcher, state => {
				state.loadingState = LoadingState.ERROR;
			});
	}
});

const { actions, reducer } = categoriesSlice;

export default reducer;

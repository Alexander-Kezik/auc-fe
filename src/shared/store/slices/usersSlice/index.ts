import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingState } from 'shared/enums/loadingState';
import { fetchUsers, fetchUser } from './thunks';
import { isErrorMatcher, isPendingMatcher } from 'shared/store/matchers/matchers';
import { User } from 'shared/types/user';

type UsersState = {
	users: User[];
	user: User;
	count: number;
	loadingState: LoadingState;
	usersActivePage: number;
	countForPage: number;
};

const initialState: UsersState = {
	users: [],
	user: {
		name: '',
		email: '',
		username: ''
	},
	count: 0,
	loadingState: LoadingState.LOADING,
	usersActivePage: 0,
	countForPage: 12
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		changeUsersActivePage(state, action: PayloadAction<number>) {
			state.usersActivePage = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload.users;
				state.count = action.payload.count;
				state.loadingState = LoadingState.LOADED;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loadingState = LoadingState.LOADED;
			})
			.addMatcher(isPendingMatcher, state => {
				state.loadingState = LoadingState.LOADING;
			})
			.addMatcher(isErrorMatcher, state => {
				state.loadingState = LoadingState.ERROR;
			});
	}
});

const { actions, reducer } = usersSlice;

export const { changeUsersActivePage } = actions;

export default reducer;

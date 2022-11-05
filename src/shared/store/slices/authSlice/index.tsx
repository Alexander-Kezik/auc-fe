import { createSlice } from '@reduxjs/toolkit';

import { User } from 'shared/types/user';
import { signIn, verifyToken } from './thunks';

type AuthState = {
	user: User;
	isAuth: boolean;
};

const initialState: AuthState = {
	user: { name: '', email: '', username: '' },
	isAuth: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signIn.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuth = true;
			})
			.addCase(verifyToken.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuth = true;
			});
	}
});

const { actions, reducer } = authSlice;

export default reducer;

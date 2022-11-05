import { createAsyncThunk } from '@reduxjs/toolkit';

import { Authorization } from 'shared/types/credentials';
import AuthService from 'shared/api/auth';

export const signIn = createAsyncThunk<
	{ username: string; email: string; name: string },
	Authorization
>('user/signIn', async (credentials: Authorization) => {
	const { accessToken, email, name, username } = await AuthService.signIn(credentials);
	localStorage.setItem('token', accessToken);
	return { username, email, name };
});

export const verifyToken = createAsyncThunk<{ username: string; email: string; name: string }>(
	'user/verify',
	async () => {
		const { username, email, name, accessToken } = await AuthService.verifyToken();
		localStorage.setItem('token', accessToken);
		return { username, email, name };
	}
);

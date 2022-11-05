import { createAsyncThunk } from '@reduxjs/toolkit';

import UsersService from 'shared/api/users';
import { User } from 'shared/types/user';

export const fetchUsers = createAsyncThunk<
	{ users: User[]; count: number },
	{ take?: number; skip?: number }
>('users/fetchUsers', async ({ take = 12, skip = 0 }) => {
	return await UsersService.getUsers(take, skip);
});

export const fetchUser = createAsyncThunk<User, string>(
	'users/fetchUser',
	async (email: string) => {
		return await UsersService.getUser(email);
	}
);

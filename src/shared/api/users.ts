import Service from 'shared/api';

import { User } from 'shared/types/user';

interface IUsersService {
	getUsers(take: number, skip: number): Promise<{ users: User[]; count: number }>;
	getUser(email: string): Promise<User>;
}

class UsersService extends Service implements IUsersService {
	getUsers(take: number, skip: number): Promise<{ users: User[]; count: number }> {
		return this.getResource(`user/get-users?take=${take}&skip=${skip}`);
	}

	getUser(email: string): Promise<User> {
		return this.getResource(`user/get-by-email?email=${email}`);
	}
}

export default new UsersService();

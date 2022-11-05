import Service from 'shared/api';

import { Authorization, AuthorizedValues, Registration } from 'shared/types/credentials';

interface ICredentialsService {
	signUp(regCredentials: Registration): Promise<{ message: string }>;
	signIn(authCredentials: Authorization): Promise<AuthorizedValues>;
	verifyToken(): Promise<AuthorizedValues>;
}

class AuthService extends Service implements ICredentialsService {
	signUp(regCredentials: Registration): Promise<{ message: string }> {
		return this.postResources('user/signup', 'POST', regCredentials);
	}

	signIn(authCredentials: Authorization): Promise<AuthorizedValues> {
		return this.postResources('user/signin', 'POST', authCredentials);
	}

	verifyToken(): Promise<AuthorizedValues> {
		return this.getResource('user/verify-token');
	}
}

export default new AuthService();

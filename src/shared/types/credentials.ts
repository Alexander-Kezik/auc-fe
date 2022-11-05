export type Authorization = {
	email: string;
	password: string;
};

export type AuthorizedValues = {
	email: string;
	accessToken: string;
	username: string;
	name: string;
};

export type Registration = {
	username: string;
	name: string;
	email: string;
	password: string;
	confirm_password: string;
	confirm_policy: boolean;
};

export type EditCredentials = {
	username?: string;
	name?: string;
};

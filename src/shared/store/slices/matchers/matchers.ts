import { AnyAction } from '@reduxjs/toolkit';

export const isErrorMatcher = (action: AnyAction) => {
	return action.type.endsWith('rejected');
};

export const isPendingMatcher = (action: AnyAction) => {
	return action.type.endsWith('pending');
};

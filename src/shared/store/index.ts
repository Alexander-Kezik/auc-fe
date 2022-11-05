import { configureStore } from '@reduxjs/toolkit';

import lots from 'shared/store/slices/lotsSlice';
import categories from 'shared/store/slices/categoriesSlice';
import users from 'shared/store/slices/usersSlice';
import auth from 'shared/store/slices/authSlice';

const store = configureStore({
	reducer: { lots, categories, users, auth },
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

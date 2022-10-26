import { configureStore } from '@reduxjs/toolkit';

import lotsReducer from 'shared/store/slices/lotsSlice';
import categoriesReducer from 'shared/store/slices/categoriesSlice';

const store = configureStore({
	reducer: { lots: lotsReducer, categories: categoriesReducer },
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

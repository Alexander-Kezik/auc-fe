import { createSlice } from '@reduxjs/toolkit';

import { Lot } from 'shared/types/lot';
import { LoadingState } from 'shared/enums/loadingState';
import { fetchRandomLots, fetchLots, fetchLot } from './thunks';
import { isErrorMatcher, isPendingMatcher } from 'shared/store/slices/matchers/matchers';

type LotsState = {
	lots: Lot[];
	singleLot: { lot: Lot; username: string };
	count: number;
	loadingState: LoadingState;
};

const initialState: LotsState = {
	lots: [],
	singleLot: {
		lot: {
			id: '',
			startPrice: 0,
			immediatePurchasePrice: 0,
			startDate: '',
			endDate: '',
			lotName: '',
			userId: '',
			categoryId: ''
		},
		username: ''
	},
	count: 0,
	loadingState: LoadingState.LOADING
};

const lotsSlice = createSlice({
	name: 'lots',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRandomLots.fulfilled, (state, action) => {
				state.lots = action.payload;
				state.loadingState = LoadingState.LOADED;
			})
			.addCase(fetchLots.fulfilled, (state, action) => {
				state.lots = action.payload.lots;
				state.count = action.payload.count;
				state.loadingState = LoadingState.LOADED;
			})
			.addCase(fetchLot.fulfilled, (state, action) => {
				state.singleLot = action.payload;
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

const { actions, reducer } = lotsSlice;

export default reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Lot } from 'shared/types/lot';
import { LoadingState } from 'shared/enums/loadingState';
import { fetchRandomLots, fetchLots, fetchLot, fetchLotsByEmail } from './thunks';
import { isErrorMatcher, isPendingMatcher } from 'shared/store/matchers/matchers';

type LotsState = {
	lots: Lot[];
	singleLot: { lot: Lot; username: string };
	count: number;
	loadingState: LoadingState;
	countForPage: number;
	lotsActivePage: number;
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
	countForPage: 12,
	loadingState: LoadingState.LOADING,
	lotsActivePage: 0
};

const lotsSlice = createSlice({
	name: 'lots',
	initialState,
	reducers: {
		changeLotsActivePage(state, action: PayloadAction<number>) {
			state.lotsActivePage = action.payload;
		}
	},
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
			.addCase(fetchLotsByEmail.fulfilled, (state, action) => {
				state.lots = action.payload;
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

export const { changeLotsActivePage } = actions;

export default reducer;

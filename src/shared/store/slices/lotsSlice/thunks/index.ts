import { createAsyncThunk } from '@reduxjs/toolkit';
import { Lot } from 'shared/types/lot';
import LotService from 'shared/api/lot';

export const fetchRandomLots = createAsyncThunk<Lot[]>('lots/fetchRandomLots', async () => {
	return await LotService.getRandomLots();
});

export const fetchLots = createAsyncThunk<{ lots: Lot[]; count: number }>(
	'lots/fetchLots',
	async () => {
		return await LotService.getLots();
	}
);

export const fetchLot = createAsyncThunk<{ lot: Lot; username: string }, string>(
	'lots/fetchLot',
	async (lotId: string) => {
		return await LotService.getLot(lotId);
	}
);

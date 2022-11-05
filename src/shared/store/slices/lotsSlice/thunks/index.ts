import { createAsyncThunk } from '@reduxjs/toolkit';

import { Lot } from 'shared/types/lot';
import LotService from 'shared/api/lot';

export const fetchRandomLots = createAsyncThunk<Lot[]>('lots/fetchRandomLots', async () => {
	return await LotService.getRandomLots();
});

export const fetchLots = createAsyncThunk<
	{ lots: Lot[]; count: number },
	{ take?: number; skip?: number }
>('lots/fetchLots', async ({ take = 12, skip = 0 }) => {
	return await LotService.getLots(take, skip);
});

export const fetchLot = createAsyncThunk<{ lot: Lot; username: string }, string>(
	'lots/fetchLot',
	async (lotId: string) => {
		return await LotService.getLot(lotId);
	}
);

export const fetchLotsByEmail = createAsyncThunk<Lot[], string>(
	'lots/fetchLotsByUsername',
	async (email: string) => {
		return await LotService.getLotsByEmail(email);
	}
);

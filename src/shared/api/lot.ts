import Service from 'shared/api';
import { Lot } from 'shared/types/lot';

interface ILotService {
	getRandomLots(): Promise<Lot[]>;
	getLots(take: number, skip: number): Promise<{ lots: Lot[]; count: number }>;
	getLotsByEmail(email: string): Promise<Lot[]>;
	getLot(lotId: string): Promise<{ lot: Lot; username: string }>;
}

class LotService extends Service implements ILotService {
	getRandomLots(): Promise<Lot[]> {
		return this.getResource('lot/get/random');
	}

	getLots(take: number, skip: number): Promise<{ lots: Lot[]; count: number }> {
		return this.getResource(`lot/get?take=${take}&skip=${skip}`);
	}

	getLotsByEmail(email: string): Promise<Lot[]> {
		return this.getResource(`lot/get/by-email?email=${email}`);
	}

	getLot(lotId: string): Promise<{ lot: Lot; username: string }> {
		return this.getResource(`lot/get/one/${lotId}`);
	}
}

export default new LotService();

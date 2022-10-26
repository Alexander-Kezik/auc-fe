export type Lot = {
	id: string;
	startPrice: number;
	currentPrice?: number;
	immediatePurchasePrice: number;
	startDate: string | Date;
	endDate: string | Date;
	lotName: string;
	userId: string;
	categoryId: string;
	image?: string;
};

export type Lots = {
	lots: Lot[];
	count: number;
};

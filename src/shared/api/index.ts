import _axios from 'shared/configs/axios';

export default class Service {
	protected getResource = async (url: string): Promise<any> => {
		try {
			const res = await _axios({ url });
			return res.data;
		} catch (e) {
			throw new Error(`Something goes wrong!: ${e}`);
		}
	};
}

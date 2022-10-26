import Service from 'shared/api';
import { Category } from 'shared/types/category';

interface ICategoryService {
	getCategories(): Promise<Category[]>;
}

class CategoryService extends Service implements ICategoryService {
	getCategories(): Promise<Category[]> {
		return this.getResource('category/get');
	}
}

export default new CategoryService();

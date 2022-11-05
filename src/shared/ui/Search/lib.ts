import * as Yup from 'yup';

import { SearchQuery } from 'shared/types/search-query';

export const initialValues: SearchQuery = {
	searchQuery: ''
};

export const validationSchema = Yup.object({
	searchQuery: Yup.string().min(1, '1-30 symbols').max(30, '1-30 symbols')
});

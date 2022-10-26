import axios from 'axios';

const baseURL: string = 'http://localhost:8000/';

const _axios = axios.create({ baseURL });

// const authInterceptor = (configs: any): any => {
// 	configs.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
// 	return configs;
// };

// _axios.interceptors.request.use(authInterceptor);

export default _axios;

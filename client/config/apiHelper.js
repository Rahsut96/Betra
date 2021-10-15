import axios from 'axios';
import config from './apiConfig'
import { setLocalStoreData } from './localStorage';

const request = axios.create(config);
request.interceptors.response.use(
	async (response) => 
        // console.log('interceptors', response.data)
         response.data
    ,
	(error) => {
        if (error?.status ===401 || error?.status ===403) {
            setLocalStoreData(process.env.ACCESS_TOKEN, null);
        }
		const errors = { message: error?.message || 'Unexpected Error' };
		return Promise.reject(errors);
	}
);

export default {
    get: request.get,
    post: request.post,
    patch: request.patch,
    delete: request.delete,
};

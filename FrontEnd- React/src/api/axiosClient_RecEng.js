import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient_RecEng = axios.create({
    baseURL: apiConfig.baseUrl_RecEng,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    paramsSerializer: params => queryString.stringify({...params})
});

axiosClient_RecEng.interceptors.request.use(async (config) => config);

axiosClient_RecEng.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient_RecEng;
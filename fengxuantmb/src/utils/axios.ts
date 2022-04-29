import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus'
import router from '../router/index'
import { localGet,localRemove } from '../utils/index'

const service = axios.create();

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);
service.defaults.headers.token = localGet('token');
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        let { data } = response;
        if (data.code == 500 || data.code == 502) {
            ElMessage(data.message);
            localRemove('token');
            router.push({ path: '/login' });
        }
        return Promise.resolve(response);
    }, (error: any) => {
        return Promise.reject(error);
    }

);

export default service;

import axios from 'axios';
import { initSignData } from '@/redux/slices/sign';
import { JWT_TOKEN_ID } from '@/const/variable';
import { countryCode } from '@/util/util';
import { showErrorNoti, showWarningNoti } from '@/util/noti';

const apiFunction = (method) => {
    return async (uri, { body = {}, header = {}, token = true } = {}) => {
        const jwt = localStorage.getItem(JWT_TOKEN_ID);
        const config = JSON.parse(localStorage.getItem(JWT_TOKEN_ID + '-config'));
        const browserId = localStorage.getItem(JWT_TOKEN_ID + '-browser');

        try {
            let headers = {
                Accept: 'application/json',
                'Country-Code': config ? config.countryCode : countryCode,
                'Browser-Id': browserId,
                ...header
            };

            if (token) {
                headers.Authorization = `Bearer ${jwt}`;
            }

            const url = uri.indexOf('http') > -1 ? uri : process.env.NEXT_PUBLIC_API_URL + uri;

            const result = await axios({ method, url, data: body, headers });

            return result.data;
        } catch (err) {
            if (err.response) {
                if (err.response.status === 400) {
                    if (err.response.data.code == -100) showWarningNoti(err.response.data.message);
                    else showErrorNoti(err.response.data.message);
                } else if (err.response.status === 401) {
                    showErrorNoti(err.response.data.message);
                    initSignData();
                } else if (err.response.status === 404) {
                    showErrorNoti('Error 404\n' + err.response.data.message);
                } else if (err.response.status === 413) {
                    showErrorNoti(err.response.data.message);
                } else if (err.response.status === 500) {
                    showErrorNoti('서버 장애가 발생했습니다.');
                }

                return err.response;
            }
        }
    };
};

const fileFunction = () => {
    return async (uri = '') => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/file/${uri}`, { method: 'GET', headers: { 'Browser-Id': 'file' }, cache: 'no-store' });
            return await res.blob();
        } catch (err) {
            console.log('file download error: ', err);
            return false;
        }
    };
};

const api = {
    post: apiFunction('POST'),
    get: apiFunction('GET'),
    delete: apiFunction('DELETE'),
    patch: apiFunction('PATCH'),
    file: fileFunction()
};

export default api;

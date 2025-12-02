import api from '@/api';
import { encrypt, decrypt } from '@/api/crypto';

const commonApi = {
    getApi: async (uri, data, header = {}, token = true) => {
        let queryString = Object.keys(data)
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');

        const result = await api.get(`${uri}?${queryString}`, { header, token });

        return result.data;
    },

    postApi: async (uri, data, header = {}, token = true) => {
        const result = await api.post(uri, { body: data, header, token });

        return result.data;
    },

    uploadApi: async (uri, data, header = {}, token = true) => {
        // if (process.env.REACT_APP_ENV == 'production') {
        //     const result = await api.post(uri, { body: data, header });

        //     const decryptData = JSON.parse(decrypt(result.data._ || '') || '{}');

        //     return decryptData;
        // } else {
        const result = await api.post(uri, { body: data, header, token });

        return result.data;
        // }
    },

    cryptApi: async (uri, data, header = {}, token = true) => {
        // if (process.env.REACT_APP_ENV == 'production') {
        //     const encryptURL = encrypt(uri);
        //     const encryptData = encrypt(JSON.stringify(data));

        //     const result = await api.post(process.env.REACT_APP_API_URL, { body: { _u: encryptURL, _d: encryptData }, header });

        //     const decryptData = JSON.parse(decrypt(result.data._ || '') || '{}');

        //     return decryptData;
        // } else {
        const result = await api.post(uri, { body: data, header, token });

        return result.data;
        // }
    }
};

export default commonApi;

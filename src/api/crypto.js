import crypto from 'crypto-js';

const key = process.env.REACT_APP_API_CRYPTO_KEY; // 대칭형 키

// 암호화 메서드
export const encrypt = (data) => {
    const encryptResult = crypto.AES.encrypt(data, key).toString();
    return encryptResult;
};

// 복호화 메서드
export const decrypt = (data) => {
    const decodeResult = crypto.AES.decrypt(data, key).toString(crypto.enc.Utf8);

    return decodeResult;
};

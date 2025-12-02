import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '@/redux/store';
import { initSystemData } from '@/redux/slices/system';
import CommonApis from '@/api/commonApi';
import { JWT_TOKEN_ID } from '@/const/variable';
import { showErrorNoti } from '@/util/noti';

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: {},
    notification: {}
};

const slice = createSlice({
    name: 'sign',
    initialState,
    reducers: {
        setSignData(state, action) {
            return { ...state, ...action.payload };
        },
        setUserData(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
        setNotificationData(state, action) {
            state.notification = { ...state.notification, ...action.payload };
        }
    }
});

export default slice.reducer;

export const { setSignData, setUserData, setNotificationData } = slice.actions;

const setSession = (serviceToken) => {
    if (serviceToken != '0') {
        localStorage.setItem(JWT_TOKEN_ID, serviceToken);
    } else {
        localStorage.removeItem(JWT_TOKEN_ID);
    }
};

export const initSignData = () => {
    dispatch(setSignData({ isInitialized: true, isLoggedIn: false, user: {}, notification: {} }));
    dispatch(initSystemData());
};

export function userLogin(data) {
    return async () => {
        try {
            const pushToken = localStorage.getItem(JWT_TOKEN_ID + '-push');

            const result = await CommonApis.cryptApi('/login', { ...data, isAutoLogin: '1', pushToken }, {});

            if (result.code === 0) {
                const { accessToken, user, notification } = result.data;

                let data = { user };

                dispatch(setSignData({ isInitialized: true, isLoggedIn: true, user, notification }));

                setSession(accessToken);
                return data;
            } else {
                setSession('0');
                return false;
            }
        } catch (error) {
            setSession('0');
            showErrorNoti(error);
            return false;
        }
    };
}

export function userLoginCheck() {
    return async () => {
        try {
            const pushToken = localStorage.getItem(JWT_TOKEN_ID + '-push');

            const result = await CommonApis.cryptApi('/login/check', { pushToken }, {});

            if (result.code === 0) {
                const { accessToken, user, notification } = result.data;

                let data = { user };

                dispatch(setSignData({ isInitialized: true, isLoggedIn: true, user, notification }));
                setSession(accessToken);
                return data;
            } else {
                setSession('0');
                return false;
            }
        } catch (error) {
            setSession('0');
            showErrorNoti(error);
            return false;
        }
    };
}

export function userLoginOut() {
    return async () => {
        try {
            const pushToken = localStorage.getItem(JWT_TOKEN_ID + '-push');

            const result = await CommonApis.cryptApi('/logout', { pushToken }, {});

            if (result.code === 0) {
                initSignData();
                setSession('0');
                return true;
            } else return false;
        } catch (error) {
            showErrorNoti(error);
            return false;
        }
    };
}

export function userSignup(data) {
    return async () => {
        try {
            const result = await CommonApis.cryptApi('/signup', data, {});

            if (result.code === 0) return true;
            else return false;
        } catch (error) {
            showErrorNoti(error);
            return false;
        }
    };
}

export function userSignupSendEmail(data) {
    return async () => {
        try {
            const result = await CommonApis.cryptApi('/signup/send/email', data, {});

            if (result.code === 0) return true;
            else return false;
        } catch (error) {
            showErrorNoti(error);
            return false;
        }
    };
}

export function findPassword(data) {
    return async () => {
        try {
            const result = await CommonApis.cryptApi('/findPw', data, {});

            if (result.code === 0) return true;
            else return false;
        } catch (error) {
            showErrorNoti(error);
            return false;
        }
    };
}

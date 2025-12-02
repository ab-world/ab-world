// App 구분하는 녀석
export const isApp = typeof window !== 'undefined' && window.navigator.userAgent.includes('RN iPhone AppleWebKit/537.36 (KHTML, like Gecko)');
// export const isApp = typeof window !== 'undefined' && (window.navigator.userAgent.includes('android') || window.navigator.userAgent.includes('ios'));
// Mobile 구분하는 녀석
export const isMobile = typeof window !== 'undefined' && window.navigator.userAgent.includes('Mobile');

// Web => Native
export const postMessageNative = (data) => {
    if (!isApp) return;

    window.ReactNativeWebView.postMessage(JSON.stringify(data));
};

// Native => Web
export const getMessageNative = (type) => {
    if (!isApp) return;

    return window[type];
};

// Native RouterPush
export const routerPush = (e, path, opt = false) => {
    if (isApp) {
        e?.preventDefault();

        if (path == 'back' || path.includes('http')) postMessageNative({ type: 'ROUTER_EVENT', data: path });
        else postMessageNative({ type: 'ROUTER_EVENT', data: location.origin + path });
    } else if (opt) {
        window.location.href = path;
    }
};

export const windowOpen = (e, path, opt) => {
    e?.preventDefault();

    if (isApp) {
        if (path.includes('http')) postMessageNative({ type: 'WINDOW_OPEN', data: path });
        else postMessageNative({ type: 'WINDOW_OPEN', data: location.origin + path });
    } else {
        window.open(path, path, opt);
    }
};

/**
 * 배열에서 특정 키값으로 객체 생성하는 함수
 * @param list 배열 Array
 * @param key 특정 키값 String
 * @returns 객체 반환
 */
export const createObj = (list, key) => {
    let obj = {};

    list.forEach((i) => {
        if (i[key] == null) obj[i[key]] = [i];
        else {
            const findItem = Object.keys(obj).find((find) => find == i[key]);
            if (findItem) {
                obj[i[key]].push(i);
            } else {
                obj[i[key]] = [i];
            }
        }
    });

    return obj;
};

/**
 * trim 함수 (공백제거)
 * @param text string
 * @returns 공백 제거된 string
 */
export const trim = (text) => {
    if (typeof text != 'string') return text;
    return text.replace(/ /gi, '');
};

// Debounce
export const debounce = (func, timeout = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

// JSON.parse
export const jsonParse = (text) => {
    try {
        return JSON.parse(text);
    } catch (e) {
        console.error('JSON 파싱 실패:', e);
        return {}; // 또는 {} 등 기본값
    }
};

let countryQuery = null;

if (typeof window == 'object') {
    countryQuery = window.location.pathname.split('/')[1];
}

export const countryCode = countryQuery == 'kr' || countryQuery == 'cn' || countryQuery == 'en' ? countryQuery : null;

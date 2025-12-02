import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '@/redux/store';
import CommonApis from '@/api/commonApi';

const initialState = {};

const slice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setDataListSuccess(state, action) {
            return { ...state, ...action.payload };
        }
    }
});

export default slice.reducer;

export const { setDataListSuccess } = slice.actions;

export function uploadFiles(uri, param, header = {}) {
    return async () => {
        const result = await CommonApis.uploadApi(uri, param, header);

        if (result.code === 0) {
            return result.data.files;
        } else {
            return [];
        }
    };
}

export function initDataList(id, param = []) {
    return async () => {
        let data = {};

        data[id] = param;

        dispatch(setDataListSuccess({ ...data }));

        return true;
    };
}

export function getDataList(uri, param, id = '', header = {}, dataList = []) {
    return async () => {
        const result = await CommonApis.cryptApi(uri, param, header);

        if (result.code === 0) {
            if (id != '') {
                let data = {};
                data[id] = [...dataList, ...result.data.dataList];

                dispatch(setDataListSuccess({ ...data }));
            }

            return result.data;
        } else {
            return false;
        }
    };
}

export function saveDataList(uri, param, id = '', dataList = [], header = {}) {
    return async () => {
        const result = await CommonApis.cryptApi(uri, param, header);

        if (result.code === 0) {
            const resultDataList = result.data?.dataList || [];
            const idxSeqs = resultDataList.filter((row) => row.workingTag == 'D').map((row) => row.idxSeq);

            let data = {};

            // 처리결과 반영
            if (id != '') {
                if (dataList.length > 0) {
                    data[id] = dataList
                        .filter((row) => row.idxSeq > 0 && !idxSeqs.includes(row.idxSeq))
                        .map((row, index) => {
                            let _ = resultDataList.filter((r) => r.idxSeq == row.idxSeq);

                            return { ...(_.length > 0 ? _[0] : row), idxSeq: index + 1 };
                        });

                    dispatch(setDataListSuccess({ ...data }));
                } else {
                    data[id] = resultDataList;

                    dispatch(setDataListSuccess({ ...data }));
                }
            } else if (id == '') {
                data['dataList'] = dataList
                    .filter((row) => row.idxSeq > 0 && !idxSeqs.includes(row.idxSeq))
                    .map((row, index) => {
                        let _ = resultDataList.filter((r) => r.idxSeq == row.idxSeq);

                        return { ...(_.length > 0 ? _[0] : row), idxSeq: index + 1 };
                    });
            }

            return data;
        } else {
            return false;
        }
    };
}

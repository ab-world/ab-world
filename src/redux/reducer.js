import { combineReducers } from 'redux';
import commonReducer from '@/redux/slices/common';
import systemReducer from '@/redux/slices/system';
import signReducer from '@/redux/slices/sign';

const reducer = combineReducers({
    common: commonReducer,
    system: systemReducer,
    sign: signReducer
});

export default reducer;

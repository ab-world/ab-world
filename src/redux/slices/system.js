import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    presetColor: 'default',
    pushRequestModal: false,
    errorMessageModal: { open: false, message: '' },
    alertMessageModal: { open: false, message: '' },
    loading: false
};

const slice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        initSystemData() {
            return { ...initialState };
        },
        setPresetColor(state, action) {
            state.presetColor = action.payload;
        },
        setPushRequestModal(state, action) {
            state.pushRequestModal = action.payload;
        },
        setErrorMessageModal(state, action) {
            state.errorMessageModal = action.payload;
        },
        setAlertMessageModal(state, action) {
            state.alertMessageModal = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        }
    }
});

export default slice.reducer;

export const { initSystemData, setPresetColor, setPushRequestModal, setErrorMessageModal, setAlertMessageModal, setLoading } = slice.actions;

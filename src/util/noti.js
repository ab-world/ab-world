import { enqueueSnackbar } from 'notistack';
import NotiStackCloseAction from '@/component/common/snackbar/NotiStackCloseAction';
import NotiStackFCMAction from '@/component/common/snackbar/NotiStackFCMAction';

export const showSuccessNoti = (message, anchorOrigin = { vertical: 'bottom', horizontal: 'right' }) => {
    enqueueSnackbar(message, { variant: 'success', anchorOrigin, action: NotiStackCloseAction });
};

export const showErrorNoti = (message, anchorOrigin = { vertical: 'bottom', horizontal: 'right' }) => {
    enqueueSnackbar(message.length > 200 ? message.substring(0, 200) + '...' : message, {
        variant: 'info',
        anchorOrigin,
        action: NotiStackCloseAction
    });
};

export const showWarningNoti = (message, anchorOrigin = { vertical: 'bottom', horizontal: 'right' }) => {
    enqueueSnackbar(message, { variant: 'warning', anchorOrigin, action: NotiStackCloseAction });
};

export const showFCMNoti = (message, body = '', noti = {}) => {
    enqueueSnackbar(message, {
        variant: 'fcm',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        body,
        action: (snackbarId) => NotiStackFCMAction(snackbarId, noti)
    });
};

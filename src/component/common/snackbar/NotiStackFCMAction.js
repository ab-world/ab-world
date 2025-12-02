import React from 'react';
import { closeSnackbar } from 'notistack';
import { IconX, IconArrowRight } from '@tabler/icons-react';

const NotiStackFCMAction = (snackbarId, notification) => {
    return (
        <>
            <button
                sx={{ color: (theme) => theme.palette.common.white }}
                onClick={() => {
                    closeSnackbar(snackbarId);

                    // dispatch(navigateTo({ pgmSeq: notification?.pgmSeq }));
                }}
            >
                <IconArrowRight />
            </button>

            <button sx={{ color: (theme) => theme.palette.common.white }} onClick={() => closeSnackbar(snackbarId)}>
                <IconX />
            </button>
        </>
    );
};

export default NotiStackFCMAction;

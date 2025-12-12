import React from 'react';
import { closeSnackbar } from 'notistack';
import { IconX, IconArrowRight } from '@tabler/icons-react';

const NotiStackFCMAction = (snackbarId, notification) => {
    return (
        <>
            <button
                aria-label="RightArrow"
                sx={{ color: (theme) => theme.palette.common.white }}
                onClick={() => {
                    closeSnackbar(snackbarId);

                    // dispatch(navigateTo({ pgmSeq: notification?.pgmSeq }));
                }}
            >
                <IconArrowRight />
            </button>

            <button aria-label="Close" sx={{ color: (theme) => theme.palette.common.white }} onClick={() => closeSnackbar(snackbarId)}>
                <IconX />
            </button>
        </>
    );
};

export default NotiStackFCMAction;

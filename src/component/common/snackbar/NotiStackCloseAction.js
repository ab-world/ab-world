import React from 'react';
import { closeSnackbar } from 'notistack';
import { IconX } from '@tabler/icons-react';

const NotiStackCloseAction = (snackbarId) => {
    return (
        <>
            <button sx={{ color: (theme) => theme.palette.common.white }} onClick={() => closeSnackbar(snackbarId)}>
                <IconX />
            </button>
        </>
    );
};

export default NotiStackCloseAction;

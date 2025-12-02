'use client';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import NotiStackCustom from './NotiStackCustom';

const NotiStackProvider = () => {
    return (
        <SnackbarProvider
            Components={{
                success: NotiStackCustom,
                warning: NotiStackCustom,
                info: NotiStackCustom,
                fcm: NotiStackCustom
            }}
            autoHideDuration={5000}
            maxSnack={3}
        />
    );
};

export default NotiStackProvider;

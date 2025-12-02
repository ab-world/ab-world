import React, { forwardRef } from 'react';
import { MaterialDesignContent } from 'notistack';

const NotiStackCustom = forwardRef(({ message, body, ...other }, ref) => {
    let newMessage = body ? message + '\n' + body : message;

    return <MaterialDesignContent ref={ref} {...other} message={newMessage} />;
});

export default NotiStackCustom;

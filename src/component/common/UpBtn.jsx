'use client';
import { IconArrowUp } from '@tabler/icons-react';

const UpBtn = () => {
    const onClickUpBtn = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button className={'upBtn'} onClick={onClickUpBtn}>
            <IconArrowUp />
        </button>
    );
};

export default UpBtn;

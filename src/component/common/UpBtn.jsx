'use client';
import { useState, useEffect } from 'react';
import { IconArrowUp } from '@tabler/icons-react';

const UpBtn = () => {
    const [isScrolled, setIsScrolled] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) setIsScrolled(1);
        else setIsScrolled(0);
    };

    const onClickUpBtn = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button className={`upBtn ${isScrolled ? 'active' : ''}`} onClick={onClickUpBtn}>
            <IconArrowUp />
        </button>
    );
};

export default UpBtn;

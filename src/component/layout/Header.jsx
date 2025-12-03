import styles from './Header.module.scss';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import MenuModal from '@/modal/MenuModal';
import { NAV_ITEMS } from '@/const/nav.js';
import { IconMenu2 } from '@tabler/icons-react';

const ACTIVE_HEADER = ['/map', '/k-system-erp', '/contact'];

const Header = () => {
    const pathname = usePathname();
    const [currentWidth, setCurrentWidth] = useState(0);
    const [headerColor, setHeaderColor] = useState(0);
    const [menuModal, setMenuModal] = useState(false);

    useEffect(() => {
        setCurrentWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [currentWidth]);

    const handleResize = () => {
        setCurrentWidth(window.innerWidth);
    };

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight / 2) setHeaderColor(1);
        else setHeaderColor(0);
    };

    // 카테고리 버튼 click
    const onClickMenuBtn = (e) => {
        e.stopPropagation();

        setMenuModal(true);
    };

    return (
        <div className={`${styles.container} ${ACTIVE_HEADER.includes(pathname) || headerColor ? styles.active : ''}`}>
            {menuModal && <MenuModal open={menuModal} setOpen={setMenuModal} />}

            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <div className={styles.leftView}>
                        <div className={styles.imgWrapper}>
                            <Link href={'/'}>
                                <Image src="/ablogo.png" fill priority alt="ab logo" />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.rightView}>
                        <ul className={styles.navList}>
                            {NAV_ITEMS.map((nav) => (
                                <li key={nav.label} className={styles.navItem}>
                                    <Link
                                        className={`${ACTIVE_HEADER.includes(pathname) || headerColor ? styles.active : ''}`}
                                        href={nav.url}
                                        target={nav.url.includes('http') ? '_blank' : '_self'}
                                        onClick={(e) => {
                                            if (nav.url == '') {
                                                e.preventDefault();
                                                return;
                                            }
                                        }}
                                    >
                                        {nav.label}
                                    </Link>

                                    {nav.subNavItems?.length && (
                                        <div className={styles.subNavView}>
                                            <ul>
                                                {nav.subNavItems.map((subNav) => (
                                                    <li key={subNav.label} className={styles.subNavItem}>
                                                        <Link className={styles.active} href={subNav.url} target={subNav.url.includes('http') ? '_blank' : '_self'}>
                                                            {subNav.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <button className={`${styles.hamburgerBtn} ${ACTIVE_HEADER.includes(pathname) || headerColor ? styles.active : ''}`} onClick={onClickMenuBtn}>
                            <IconMenu2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

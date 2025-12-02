'use client';
import styles from './Header.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import commonApi from '@/api/commonApi';
import MenuModal from '@/modal/MenuModal';
import { NAV_ITEMS } from '@/const/nav.js';
import { IconMenu2 } from '@tabler/icons-react';

const Header = () => {
    const [menuModal, setMenuModal] = useState(false);

    // 카테고리 버튼 click
    const onClickMenuBtn = (e) => {
        e.stopPropagation();

        setMenuModal(true);
    };

    return (
        <div className={styles.container}>
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

                    <div className={styles.centerView}>
                        <ul className={styles.navList}>
                            {NAV_ITEMS.map((nav) => (
                                <li key={nav.label} className={styles.navItem}>
                                    <Link href={nav.url} target={nav.url.includes('http') ? '_blank' : '_self'}>
                                        {nav.label}
                                    </Link>

                                    {nav.subNavItems?.length && (
                                        <div className={styles.subNavView}>
                                            <ul>
                                                {nav.subNavItems.map((subNav) => (
                                                    <li key={subNav.label} className={styles.subNavItem}>
                                                        <Link href={subNav.url} target={subNav.url.includes('http') ? '_blank' : '_self'}>
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
                    </div>

                    <div className={styles.rightView}>
                        <Link className={styles.asBtn} href={'https://abcosmos.com/kr/main/system/operation/pgmMetaASRequestReg'} target="__blank">
                            서비스문의
                        </Link>

                        <button className={styles.hamburgerBtn} onClick={onClickMenuBtn}>
                            <IconMenu2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

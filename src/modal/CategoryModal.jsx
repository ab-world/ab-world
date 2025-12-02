import styles from './CategoryModal.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/component/layout/Modal';
import { showErrorNoti, showSuccessNoti } from '@/util/noti';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { NAV_ITEMS } from '@/const/nav';
import Link from 'next/link';

export default function CategoryModal(props) {
    const { open, setOpen } = props;
    const [openCategory, setOpenCategory] = useState(-1);

    return (
        <Modal open={open} setOpen={setOpen} childStyle={{ width: '100%', height: '100%', maxHeight: '100%' }} title="메뉴" isBackBlur>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    {NAV_ITEMS.map((nav, navIndex) => (
                        <li key={nav.label} className={styles.navItem}>
                            <Link
                                href={nav.url}
                                target={nav.url.includes('http') ? '_blank' : '_self'}
                                onClick={() => {
                                    if (nav.subNavItems?.length) {
                                        setOpenCategory(openCategory == navIndex ? -1 : navIndex);
                                        return;
                                    }
                                    setOpen(false);
                                }}
                            >
                                {nav.label}

                                {nav.subNavItems?.length && <>{openCategory == navIndex ? <IconChevronUp /> : <IconChevronDown />}</>}
                            </Link>

                            {nav.subNavItems?.length && openCategory == navIndex && (
                                <div className={styles.subNavView}>
                                    <ul>
                                        {nav.subNavItems.map((subNav) => (
                                            <li key={subNav.label} className={styles.subNavItem}>
                                                <Link href={subNav.url} target={subNav.url.includes('http') ? '_blank' : '_self'} onClick={() => setOpen(false)}>
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
        </Modal>
    );
}

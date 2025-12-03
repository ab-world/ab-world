import styles from './MenuModal.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/component/layout/Modal';
import { NAV_ITEMS } from '@/const/nav';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function MenuModal(props) {
    const { open, setOpen } = props;
    const [openMenu, setOpenMenu] = useState(-1);

    return (
        <Modal open={open} setOpen={setOpen} childStyle={{ width: '100%', height: '100%', maxHeight: '100%' }} title="메뉴" isBackBlur>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    {NAV_ITEMS.map((nav, navIndex) => (
                        <li key={nav.label} className={styles.navItem}>
                            <Link
                                href={nav.url}
                                target={nav.url.includes('http') ? '_blank' : '_self'}
                                onClick={(e) => {
                                    if (nav.subNavItems?.length) {
                                        setOpenMenu(openMenu == navIndex ? -1 : navIndex);
                                        e.preventDefault();
                                        return;
                                    }

                                    setOpen(false);
                                }}
                            >
                                {nav.label}

                                {nav.subNavItems?.length && <>{openMenu == navIndex ? <IconChevronUp /> : <IconChevronDown />}</>}
                            </Link>

                            {nav.subNavItems?.length && openMenu == navIndex && (
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

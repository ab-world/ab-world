// K System ERP 페이지
'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import commonApi from '@/api/commonApi';
import { IconChevronRight } from '@tabler/icons-react';

export default function CEO(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <picture>
                        <source srcSet="/bg.jpg" media="(max-width: 900px)" />

                        <Image src="/bg.jpg" fill priority alt="banner sample" />
                    </picture>
                </div>

                <div className={styles.mainSection}></div>
            </main>
        </div>
    );
}

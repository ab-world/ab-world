// 비전 페이지
'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Vision(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}></div>
            </main>
        </div>
    );
}

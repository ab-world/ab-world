// K-System ERP 페이지
'use client';
import styles from './page.module.scss';
import { useEffect, useRef } from 'react';

export default function KSystemERP(props) {
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            fetch('/k-system-erp.html')
                .then((res) => res.text())
                .then((text) => (divRef.current.innerHTML = text));
        }
    }, [divRef]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div ref={divRef} />
            </main>
        </div>
    );
}

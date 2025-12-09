// K-System ERP 페이지
'use client';
import styles from './page.module.scss';
import { useEffect, useRef } from 'react';

export default function KSystemERP(props) {
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            fetch('/html/k-system-erp.html')
                .then((res) => res.text())
                .then((text) => {
                    divRef.current.innerHTML = text;

                    const accordions = divRef.current.querySelectorAll('.accordion-item');

                    accordions.forEach((item) => {
                        const header = item.querySelector('.accordion-title a');
                        const content = item.querySelector('.accordion-collapse');

                        content.style.overflow = 'hidden';
                        content.style.height = '0';
                        content.style.transition = `max-height 0.5s ease-in-out`;

                        header.addEventListener('click', (e) => {
                            e.preventDefault();

                            const isOpen = item.classList.contains('active');

                            if (isOpen) {
                                item.classList.remove('active');
                                header.classList.add('collapsed');
                                content.style.height = '0';
                                content.classList.remove('in');
                            } else {
                                accordions.forEach((otherItem) => {
                                    const otherHeader = otherItem.querySelector('.accordion-title a');
                                    const otherContent = otherItem.querySelector('.accordion-collapse');

                                    otherContent.style.transition = `height 0.5s ease-in-out`;

                                    if (otherContent !== content) {
                                        otherItem.classList.remove('active');
                                        otherHeader.classList.add('collapsed');

                                        otherContent.style.height = '0';
                                        otherContent.classList.remove('in');
                                    }
                                });

                                // 현재 아코디언 열기
                                item.classList.add('active');
                                header.classList.remove('collapsed');
                                content.style.height = content.scrollHeight + 'px';
                                content.classList.add('in');
                            }
                        });
                    });

                    divRef.current.style.display = 'block';
                });
        }
    }, [divRef]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div ref={divRef} style={{ display: 'none' }} />
            </main>
        </div>
    );
}

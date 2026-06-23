import { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas.parentElement;

        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = 20;

            const ctx = canvas.getContext('2d');

            // 배경
            ctx.fillStyle = '#F4F4F4';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = '12px NotoSansKR, sans-serif';
            ctx.fillStyle = '#171717';
            ctx.textBaseline = 'middle';

            const y = canvas.height / 2;

            // 전화번호, 팩스, 이메일
            ctx.fillText('대표전화 : 070-4077-0265  |  팩스 : 0504-219-5292  |  이메일 : support@abworld.co.kr', 0, y);
        };

        resizeCanvas();

        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(parent);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.footerSection}>
                    <div className={styles.infoView}>
                        <div className={styles.textView}>
                            <div>
                                <p>{`회사명 : (주)에이비  |  대표 : 류정`}</p>
                                <span>{`  |  `}</span>
                                <p>사업자등록번호 : 667-88-02513</p>
                                <span>{`  |  `}</span>
                                <p>통신판매업 신고번호 : 제2024-서울강서-2501호</p>
                            </div>

                            <p>{`본사 : 서울시 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406 (우)07548`}</p>

                            <canvas ref={canvasRef} />

                            <p className={styles.copyRight}>Copyright © AB Co.,Ltd. All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className={styles.policyView}>
                        <Link className={styles.privacypolicy} href={'/privacy'}>
                            개인정보처리방침
                        </Link>
                        <Link href={'/email'}>이메일무단수집거부</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

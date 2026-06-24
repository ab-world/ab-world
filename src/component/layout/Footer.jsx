import { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import CanvasArea from '../common/CanvasArea';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 600px)');

        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);

        setIsMobile(mq.matches);

        return () => mq.removeEventListener('change', handler);
    }, []);

    const contexts = {
        address1: { text: '본사 : 서울시 강서구 화곡로68길 15, ', fontSize: isMobile ? 12 : 13, fontFamily: 'NotoSansKR, sans-serif' },
        address2: { text: '가양아벨테크노지식산업센터 406 (우)07548', fontSize: isMobile ? 12 : 13, fontFamily: 'NotoSansKR, sans-serif' },
        tel: { text: '대표전화 : 070-4077-0265  |  ', fontSize: isMobile ? 12 : 13, fontFamily: 'NotoSansKR, sans-serif' },
        fax: { text: '팩스 : 0504-219-5292  |  ', fontSize: isMobile ? 12 : 13, fontFamily: 'NotoSansKR, sans-serif' },
        email: { text: '이메일 : support@abworld.co.kr', fontSize: isMobile ? 12 : 13, fontFamily: 'NotoSansKR, sans-serif' }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.footerSection}>
                    <div className={styles.infoView}>
                        <div className={styles.textView}>
                            <div className={styles.divText}>
                                <p>{`회사명 : (주)에이비  |  대표 : 류정`}</p>
                                <span>{`  |  `}</span>
                                <p>사업자등록번호 : 667-88-02513</p>
                                <span>{`  |  `}</span>
                                <p>통신판매업 신고번호 : 제2024-서울강서-2501호</p>
                            </div>

                            <div className={styles.div2}>
                                <CanvasArea contexts={contexts['address1']} />
                                <CanvasArea contexts={contexts['address2']} />
                            </div>

                            <div className={styles.div2}>
                                <CanvasArea contexts={contexts['tel']} />
                                <CanvasArea contexts={contexts['fax']} />
                                <CanvasArea contexts={contexts['email']} />
                            </div>

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

// 이메일무단수집거부 페이지
'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Email(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <h2 className={styles.title}>이메일무단수집거부</h2>

                    <div>
                        <h4>본 웹사이트는 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단 수집되는 것을 거부합니다.</h4>
                        <h4>이를 위반시 『정보통신망 이용 촉진 및 정보보호 등에 관한 법률』등에 의해 처벌 받을 수 있습니다.</h4>
                    </div>
                </div>
            </main>
        </div>
    );
}

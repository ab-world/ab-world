// 샘플 페이지
import styles from './page.module.scss';
import Image from 'next/image';
import { getMetadata } from '@/util/seo';

export default function Sample(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image src="/ablogo.png" width={50} height={50} priority alt="ab logo" />

                <div className={styles.mainSection}>샘플</div>
            </main>
        </div>
    );
}

export const generateMetadata = async ({ params: { username } }) => {
    // return getMetadata({ title: `반짝반짝 빛날 ${username}님의 인생지도`, asPath: `/home/${username}` });
};

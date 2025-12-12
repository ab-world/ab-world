// 샘플 페이지
import styles from './page.module.scss';
import Image from 'next/image';
import { getMetadata } from '@/util/seo';

export default function Sample(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image src="/img/ablogo.png" width={50} height={50} priority alt="ab logo" />

                <div className={styles.mainSection}>샘플</div>
            </main>
        </div>
    );
}

export const generateMetadata = async ({ params }) => {
    // return getMetadata({ asPath: `/sample` });
};

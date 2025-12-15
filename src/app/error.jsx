'use client';
import styles from './layout.module.scss';
import Image from 'next/image';

const Error = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/main/main2.jpg" fill priority alt="banner img" />

            <div className={styles.textBox}>
                <h2>{`Error`}</h2>
            </div>
        </div>
    );
};

export default Error;

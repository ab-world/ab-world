import styles from './layout.module.scss';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/main/main2.jpg" fill priority alt="banner img" />

            <div className={styles.textBox}>
                <h2>{`PAGE NOT FOUND`}</h2>
            </div>
        </div>
    );
};

export default NotFound;

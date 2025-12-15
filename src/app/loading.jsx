import styles from './layout.module.scss';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/main/main2.jpg" fill priority alt="banner img" />

            <div className={styles.textBox}>
                <h2>
                    {`Above Business,
                      Your Trustworthly Partner`}
                </h2>
            </div>
        </div>
    );
};

export default Loading;

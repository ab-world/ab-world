import styles from './SuspenseView.module.scss';
import Image from 'next/image';

const SuspenseView = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/main/main2.jpg" fill priority alt="banner img" />

            <div className={styles.textBox}>
                <h1>
                    {`Above Business,
                      Your Trustworthly Partner`}
                </h1>
            </div>
        </div>
    );
};

export default SuspenseView;

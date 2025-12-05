import styles from './LoadingView.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const LoadingView = () => {
    const { loading } = useSelector((state) => state.system);

    if (loading)
        return (
            <div className={styles.loadingView}>
                <div className={styles.imgWrapper}>
                    <Image src={'/img/loading.svg'} fill priority alt="loading img" />
                </div>
            </div>
        );
};

export default LoadingView;

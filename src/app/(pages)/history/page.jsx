// 연혁 페이지
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function History(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <h1>연혁</h1>
                    <h2>History</h2>

                    <div className={styles.lineView}>
                        <div className={styles.line}></div>

                        {[
                            { year: 2025, contents: ['엄청난 일 5'], image: '/ceo.jpg' },
                            { year: 2024, contents: ['엄청난 일 4'], image: '' },
                            { year: 2023, contents: ['엄청난 일', '엄청난 일 2', '엄청난 일 3'], image: '' }
                        ].map((historyItem, historyIndex) => (
                            <div className={`${styles.historyItem} ${historyIndex % 2 == 1 ? styles.left : styles.right}`} key={historyItem.contents}>
                                <div className={styles.wrapper}>
                                    <div className={styles.yearView}>
                                        <div className={styles.hLine} />

                                        <p className={styles.year}>{historyItem.year}</p>
                                    </div>

                                    <div className={styles.contentView}>
                                        {historyItem.contents.map((content, index) => (
                                            <p key={content + index}>· {content}</p>
                                        ))}
                                    </div>

                                    {historyItem.image && (
                                        <div className={styles.img}>
                                            <Image src={historyItem.image} fill priority alt="history img" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

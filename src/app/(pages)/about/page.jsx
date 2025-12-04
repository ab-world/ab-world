// 연혁 페이지
import styles from './page.module.scss';
import Image from 'next/image';

const HISTORY = [
    {
        year: 2025,
        contents: ['삼우종합건축사사무소 ERP 구축중', '해피랜드 ERP 구축중', '블룸에스케이퓨얼셀 ERP 구축', '허밍아비스 ERP 구축', '오공 주문관리시스템 구축', '한림기계 CRM/MES/AS 시스템 구축'],
        image: ''
    },
    { year: 2024, contents: ['여의도순복음교회 ERP 구축', '자비스 ERP 구축', '대한산업안전협회 ERP 구축', '크린토피아 가맹점정산시스템 구축', 'COSMOS 자사 WMS솔루션 런칭 '], image: '' },
    { year: 2023, contents: ['유도 ERP 구축', '유성기업 ERP 구축', '청도성문전자 ERP 구축', '삼양방역 시스템 구축', '연구소개설, 자사솔루션 개발 착수'], image: '' },
    { year: 2022, contents: ['일본 류보 백화점 ERP 구축', 'NH농협무역 ERP 구축', '뉴트리원 WMS 연동 개발', '4/5 법인설립'], image: '' }
];

export default function About(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <Image src="/img/about/about.jpg" fill priority alt="banner img" />

                    <div className={styles.textBox}>
                        <h1>
                            {`A company
                              that contributes to society by creating value based on trust,
                              nurturing talent, and growing at the same time`}
                        </h1>
                        <h2>신뢰를 바탕으로 자율과 책임으로 똑똑하게 일하는 회사</h2>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <h2>
                        {`신뢰를 바탕으로 가치를 창출하고 인재를 양성하며
                          동시에 성장하여 사회에 공헌하는 기업`}
                    </h2>

                    <div className={styles.titleView}>
                        <h1>OUR STORY</h1>
                        <h2>우리는 계속 성장하고 있습니다.</h2>
                    </div>

                    <div className={styles.lineView}>
                        <div className={styles.line}></div>

                        {HISTORY.map((historyItem, historyIndex) => (
                            <div className={`${styles.historyItem} ${historyIndex % 2 == 0 ? styles.left : styles.right}`} key={historyItem.contents}>
                                <div className={styles.wrapper}>
                                    <div className={styles.yearView}>
                                        <div className={styles.hLine} />

                                        <p className={styles.year}>{historyItem.year}</p>
                                    </div>

                                    <div className={styles.contentView}>
                                        {historyItem.contents.map((content, index) => (
                                            <p key={content + index}>{content}</p>
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

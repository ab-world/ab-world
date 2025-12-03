// 홈 페이지
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const PRODUCT = [
    {
        productName: 'K-System ERP',
        image: '/product1.jpg',
        description: `직관적인 비즈니스 Practice를 필요로 하는 디지털 시대의 요구에 부합할 수 있도록 설계된 ERP 솔루션으로 국내·외 2,600여 개의 고객사가 사용하고 있는 검증된 제품입니다.`,
        url: '/k-system-erp'
    },
    {
        productName: '플렉스튜디오',
        image: '/product2.png',
        description: `Asia No.1 로우코드 개발 플랫폼,\n모든 업무 솔루션을 하나로 통합하는\n맞춤형 기업용 애플리케이션을 개발할 수 있습니다.`,
        url: 'https://flextudio.com'
    },
    { productName: 'COSMOS', image: '/product3.png', description: `유통 통합관리 시스템,\n판매/구매/물류 입출고관리를 쉽고 \n빠르게 업무 처리 가능합니다.`, url: 'https://abcosmos.com' }
];

export default function Home(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <Image src="/main.jpg" fill priority alt="banner img" />

                    <div className={styles.textBox}>
                        <h2>우리는 일이 즐거워지게 하는 솔루션을 구축합니다.</h2>
                        <h1>
                            {`Develop
                              The Solution With 
                              Happy`}
                        </h1>
                        <h2>Above Business, Your Trustworthly Partner</h2>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.productView}>
                        <h2>제품소개</h2>

                        <div className={styles.flexView}>
                            {PRODUCT.map((productItem) => (
                                <Link key={productItem.productName} className={styles.productItem} href={productItem.url} target={productItem.url.includes('http') ? '_blank' : '_self'}>
                                    <div className={styles.productImg}>
                                        <Image src={productItem.image} width={1280} height={0} priority alt="product img" />
                                    </div>

                                    <p className={styles.productName}>{productItem.productName}</p>
                                    <p className={styles.productDesc}>{productItem.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.philosophyView}>
                        <h2>BUSINESS PHILOSOPHY</h2>

                        <div className={styles.flexView}>
                            {[1, 2, 3, 4, 5].map((philosophyItem) => (
                                <div key={philosophyItem}>
                                    <div className={styles.philosophyImg}>
                                        <Image src={`/philosophy${philosophyItem}.png`} width={1280} height={0} priority alt="philosophy img" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className={styles.customerView}>
                        <h2>주요 고객</h2>

                        <div className={styles.marqueeView}>
                            <div className={styles.trackView}>
                                {[
                                    { customerName: '현대자동차', image: '' },
                                    { customerName: '삼성전자', image: '' },
                                    { customerName: '까브드뱅', image: '' },
                                    { customerName: '구글', image: '' },
                                    { customerName: '테슬라', image: '' },
                                    { customerName: '애플', image: '' },
                                    { customerName: '엔비디아', image: '' },
                                    { customerName: '팔란티어', image: '' },
                                    { customerName: '아이렌', image: '' },
                                    { customerName: '메타', image: '' }
                                ].map((customerItem) => (
                                    <div key={customerItem.customerName + 'a'}>
                                        <div className={styles.customerImg}>
                                            <Image src="/clogo.svg" width={1280} height={0}  priority alt="customer img" />
                                        </div>

                                        <p>{customerItem.customerName}</p>
                                    </div>
                                ))}

                                {[
                                    { customerName: '현대자동차', image: '' },
                                    { customerName: '삼성전자', image: '' },
                                    { customerName: '까브드뱅', image: '' },
                                    { customerName: '구글', image: '' },
                                    { customerName: '테슬라', image: '' },
                                    { customerName: '애플', image: '' },
                                    { customerName: '엔비디아', image: '' },
                                    { customerName: '팔란티어', image: '' },
                                    { customerName: '아이렌', image: '' },
                                    { customerName: '메타', image: '' }
                                ].map((customerItem) => (
                                    <div key={customerItem.customerName + 'b'}>
                                        <div className={styles.customerImg}>
                                            <Image src="/clogo.svg" width={1280} height={0}  priority alt="customer img" />
                                        </div>

                                        <p>{customerItem.customerName}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    );
}

// 홈 페이지
'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import commonApi from '@/api/commonApi';
import { IconChevronRight } from '@tabler/icons-react';

export default function Home(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <picture>
                        <source srcSet="/bg.jpg" media="(max-width: 900px)" />

                        <Image src="/bg.jpg" fill priority alt="banner sample" />
                    </picture>

                    <div className={styles.textBox}>
                        <h1>Make a happy workplace</h1>
                        <h2>우리는 일이 즐거워지게 하는 솔루션을 구축합니다.</h2>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.productView}>
                        <h2>제품 소개</h2>

                        <div className={styles.flexView}>
                            {[
                                { productName: 'K System ERP', image: '/erp.png', description: '표준프로세스를 바탕으로 철저한 품질 검수' },
                                { productName: '플렉스튜디오', image: '/erp.png', description: '표준프로세스를 바탕으로 철저한 품질 검수' },
                                { productName: 'AB COSMOS', image: '/erp.png', description: '표준프로세스를 바탕으로 철저한 품질 검수' }
                            ].map((productItem) => (
                                <div key={productItem.productName}>
                                    <div className={styles.productImg}>
                                        <Image src={productItem.image} fill priority alt="product img" />
                                    </div>

                                    <p className={styles.productName}>{productItem.productName}</p>
                                    <p className={styles.productDesc}>{productItem.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.customerView}>
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
                                            <Image src="/clogo.svg" fill priority alt="banner sample" />
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
                                            <Image src="/clogo.svg" fill priority alt="banner sample" />
                                        </div>

                                        <p>{customerItem.customerName}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </main>
        </div>
    );
}

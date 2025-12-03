// 찾아오시는 길 페이지
'use client';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { IconMapPin, IconPhone, IconBus } from '@tabler/icons-react';

export default function Map(props) {
    useEffect(() => {
        const naverMap = window.naver.maps;

        if (naverMap) {
            let mapOptions = {
                center: new naverMap.LatLng(37.3595704, 127.105399),
                zoom: 10
            };

            let map = new naverMap.Map('map', mapOptions);
        }
    }, []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <div className={styles.flexView}>
                        <div className={styles.textView}>
                            <h1 className={styles.title}>찾아오시는 길</h1>

                            <div className={styles.contentView}>
                                <div>
                                    <IconMapPin />
                                    <p>주소</p>
                                </div>

                                <p>서울 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406</p>
                            </div>

                            <div className={styles.contentView}>
                                <div>
                                    <IconPhone />
                                    <p>연락처</p>
                                </div>

                                <p>대표번호: 070-4077-0265</p>
                                <p>팩스: 0504-219-5292</p>
                            </div>

                            <div className={styles.contentView}>
                                <div>
                                    <IconBus />
                                    <p>교통수단</p>
                                </div>

                                <p>9호선 가양역 번 출구 3분 소요</p>
                            </div>
                        </div>

                        <div id={'map'} className={styles.mapView} />
                    </div>
                </div>
            </main>
        </div>
    );
}

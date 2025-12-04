// 찾아오시는 길 페이지
'use client';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { IconMapPin, IconPhone, IconBus } from '@tabler/icons-react';

export default function Map(props) {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${'135ef09ec4d49d6a7ca5f3c169f26090'}&autoload=false`;
        document.head.appendChild(script);

        script.addEventListener('load', () => {
            window.kakao.maps.load(() => {
                // 결과값 위치 좌표
                let coords = new window.kakao.maps.LatLng(37.5596, 126.8553);

                // 지도를 담을 영역의 DOM 레퍼런스
                let container = document.getElementById('map');

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                let options = {
                    center: coords, // 지도의 중심좌표
                    level: 3 // 지도의 레벨(확대, 축소 정도)
                };

                let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

                map.setCenter(coords);

                // 마커
                let content = document.createElement('div');
                content.innerHTML = `<div class='${styles.marker}'>
                                      <img src="/img/ablogo.png"/>
                                     </div>
                                    `;

                content.addEventListener('click', function () {
                    window.open('https://naver.me/IM4vqgwH');
                });

                let markerPosition = new window.kakao.maps.LatLng(37.5596, 126.8553);

                let marker = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    clickable: true
                });

                marker.setMap(map);
            });
        });
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

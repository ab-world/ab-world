// 찾아오시는 길 페이지
'use client';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { showSuccessNoti } from '@/util/noti';
import { IconCopy, IconMapPin, IconPhone, IconBus } from '@tabler/icons-react';

export default function Map(props) {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${'ab90c7a68649b2f5b5a7a0d844a9de82'}&autoload=false`;
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
                                <div className={styles.contentTitle}>
                                    <IconMapPin />
                                    <p>주소</p>
                                </div>

                                <div className={styles.contentFlexView}>
                                    <p>서울시 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406</p>

                                    <CopyToClipboard text={'서울시 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406'}>
                                        <button onClick={() => showSuccessNoti(`복사되었습니다.`)}>
                                            <IconCopy />
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>

                            <div className={styles.contentView}>
                                <div className={styles.contentTitle}>
                                    <IconPhone />
                                    <p>연락처</p>
                                </div>

                                <div className={styles.contentFlexView}>
                                    <p>대표번호: 070-4077-0265</p>

                                    <CopyToClipboard text={'070-4077-0265'}>
                                        <button onClick={() => showSuccessNoti(`복사되었습니다.`)}>
                                            <IconCopy />
                                        </button>
                                    </CopyToClipboard>
                                </div>

                                <div className={styles.contentFlexView}>
                                    <p>팩스: 0504-219-5292</p>

                                    <CopyToClipboard text={'0504-219-5292'}>
                                        <button onClick={() => showSuccessNoti(`복사되었습니다.`)}>
                                            <IconCopy />
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>

                            <div className={styles.contentView}>
                                <div className={styles.contentTitle}>
                                    <IconBus />
                                    <p>교통수단</p>
                                </div>

                                <div className={styles.contentFlexView2}>
                                    <div className={styles.contentFlexViewTitle}>지하철</div>

                                    <div>9호선 가양역 7번 출구 3분 소요</div>
                                </div>

                                <div className={styles.contentFlexView2}>
                                    <div className={styles.contentFlexViewTitle}>버스</div>

                                    <div className={styles.contentFlexViewContent}>
                                        {`간선버스: 604, 605, 652, 654, 660, 672, 673
                                          지선버스: 6627, 6632, 6633, 6642, 6715
                                          일반버스: 60
                                          광역버스: 7602, 8000, G6002
                                          마을버스: 강서04, 강서05`}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={'map'} className={styles.mapView} />
                    </div>
                </div>
            </main>
        </div>
    );
}

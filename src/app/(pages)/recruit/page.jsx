// 인재상 페이지
'use client';
import styles from './page.module.scss';
import Image from 'next/image';

const ORGANIZATION = [
    {
        organizationName: '영업사업부',
        organizationDesc: `국산 ERP 1위 솔루션 K-System ERP 에 대한 기술영업 업무를 담당 합니다.
                           제조, 유통, 공공 산업군별 특화 업무모듈을 보유한 시스템을 통해,
                           기업 경영에 필요한 전반적인 솔루션을 제공 합니다.`
    },

    {
        organizationName: '컨설팅사업부',
        organizationDesc: `전사적 자원관리 시스템 ERP를 구축하기 위해, 고객 전사적 요구사항 분석 및 업무설계 컨설팅을 합니다.
                           기업업무 이해와 경영분석 설계를 통해, 고객ERP 구축 전반 프로젝트 수행을 담당 합니다.`
    },

    {
        organizationName: '개발본부',
        organizationDesc: `기업운영을 위한 업무지식과 시스템 분석/설계에 대한 전문성으로 고객기업에 특화된 시스템 개발 업무를 수행 합니다.
                           인사/급여/회계/생산/판매/구매/물류/수입/수출 등 업무 전반적인 이해와 개발역량을 통해,
                           ERP 구축 프로젝트 개발 업무를 담당 합니다.`
    },
    {
        organizationName: '기업부설연구소',
        organizationDesc: `자사 WMS 솔루션 제품 개발을 합니다.
                           B2B 글로벌 유통을 지원하기 위한 시스템과 인프라 및 플랫폼을 분석/설계 합니다.`
    }
];

export default function RightPeople(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <Image src="/img/recruit/recruit.png" fill priority alt="banner img" />

                    <div className={styles.textBox}>
                        <h1>{`We Are Hiring`}</h1>
                        <h2>
                            {`에이비와 함께
                              고객기업이 경영을 더 잘하게, 최상의 솔루션을 제공해 나갈
                              훌륭한 인재를 찾습니다`}
                        </h2>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.titleView}>
                        <h1>에이비의 미래를 함께 할 여러분을 기다립니다.</h1>
                        <h2>
                            {`구성원들의 잠재력을 마음껏 펼칠 수 있도록 최대한 지원 할 것을 약속 드리며
                              넘치는 열정과 훌륭한 인품을 갖춘 당신을 기다립니다!`}
                        </h2>
                    </div>

                    <div className={styles.organizationView}>
                        <h1 className={styles.title}>ORGANIZATION</h1>

                        {ORGANIZATION.map((item) => (
                            <div key={item.organizationName} className={styles.organizationItem}>
                                <p className={styles.organizationName}>{item.organizationName}</p>
                                <p className={styles.organizationDesc}>{item.organizationDesc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.recruitView}>
                        <h1 className={styles.title}>제출서류</h1>
                        <p className={styles.content}>
                            {`이력서와 자기소개서를 기본 제출해 주시기 바라며,
                             포트폴리오 또는 추가 자료 제출을 원하는 지원자께서는 기타자료도 첨부 바랍니다.
                             
                             인사담당 메일주소 : hr@abworld.co.kr`}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

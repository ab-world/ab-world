// K-System ERP 페이지
import styles from './page.module.scss';

const FEATURES = [
    {
        title: '산업별 Best Practice',
        items: ['공공, 일반 제조, PMS 등 다양한 산업군에 최적화된 업무 프로세스 제공', '제약·화학·공공·식품·유통 등 특수 산업군을 위한 특화 패키지 제공']
    },
    {
        title: '프로세스 기반 업무 전환',
        items: ['구축 컨설팅부터 업무 처리, 적기 마감, 경영 개선까지 현장 중심의 자율형 ERP', '업무 프로세스에 따른 시각화된 메뉴로 생산성 향상', 'TO-BE 프로세스 메뉴화를 통한 프로세스 자산화']
    },
    {
        title: '직관적인 UI와 가시성',
        items: ['재무회계·인사급여·영업물류·생산구매·원가 부문의 경영자 정보 제공', '의사결정을 돕는 직관적인 화면 구성']
    },
    {
        title: '경영분석 모델',
        items: ['ERP 데이터에서 도출한 생산·손익·구매·영업·자금 지표 제공', '재무 기반의 보수적 경영지표로 신뢰도 높은 분석']
    }
];

const INDUSTRIES = [
    { name: '제약', modules: ['제약 기준정보관리', '간납 주문관리', '처방전관리', '영업담당자관리', '일련번호관리', '거래처 원장관리', 'Audit Trail (서명관리)'] },
    { name: '화학', modules: ['안전/보건관리', '폐기물관리', '오염물질관리', '화학물질관리(화평법)', '유틸리티 정산관리', '배합비관리', '연산품관리', '충진관리'] },
    { name: '식품/유통', modules: ['할인점 유통관리', '쇼핑몰 주문관리', '매출전환관리', '수수료 정산관리', '번들상품관리', '유통기한관리', '식품이력 추적관리', '의제매입 공제관리'] },
    { name: '자동차부품', modules: ['자동 생산계획', '매출/매입 이월관리', '매출/매입 소급관리', '출하계획관리', '불용재고관리'] },
    { name: '프로젝트', modules: ['호기별 매출원가관리', '프로젝트별 수불관리', '예산/실적관리', '계측기 이동관리', '견적관리', 'A/S관리'] },
    { name: '공공', modules: ['예산관리', '지출결의관리', '수입결의관리', '국고보조금관리', '우선구매관리', '유연근무관리', '출장관리', '외부강의/회의신고'] }
];

const PROCESSES = [
    { title: '구축 컨설팅 프로세스', items: ['도입 단계별로 시각화된 구축 컨설팅 프로세스 제시', '체계적이고 단계적인 시스템 설정', '상주형뿐 아니라 방문형 구축 컨설팅도 가능'] },
    { title: '업무 처리 프로세스', items: ['부문별 업무를 프로세스 형태의 시각화된 메뉴로 제공해 효율성과 이해도 향상', 'TO-BE 프로세스 메뉴화를 통한 프로세스 자산화'] },
    { title: '적기 마감 프로세스', items: ['마감 절차를 단계별로 시각화하여 제공', '결산 지연 요인을 줄여 적시에 결산 가능'] },
    { title: '경영 개선 프로세스', items: ['의사결정을 위한 경영자 정보 제공', '재무회계·인사급여·영업물류·생산구매·원가 정보 제공', '확장 모듈인 BI 활용 시 경영정보 시각화'] }
];

const ANALYSIS_COLUMNS = ['성장성', '수익성', '안정성', '활동성', '생산성'];

const ANALYSIS_MODELS = [
    { area: '생산 (중기)', model: '중요제품의 원재료 리스크 분석', checks: ['수익성', '활동성'] },
    { area: '손익 (단기)', model: '손익 분석을 통한 수익관리모델', checks: ['성장성', '수익성'] },
    { area: '경영 (장기)', model: '전사적 경영 상태 분석', checks: ['성장성', '수익성', '안정성', '활동성', '생산성'] },
    { area: '구매 (중기)', model: '구매 이상 징후 모니터링', checks: ['안정성'] },
    { area: '영업 (단기)', model: '수금율 관리', checks: ['활동성'] },
    { area: '자금 (단기)', model: '현금흐름분석', checks: ['수익성', '안정성'] },
    { area: '생산 (중기)', model: '원부자재 불량 원가', checks: ['수익성', '생산성'] },
    { area: '생산 (중기)', model: '품목별 생산성 분석 모델', checks: ['생산성'] },
    { area: '자금 (단기)', model: '자금수지분석', checks: ['안정성'] }
];

export default function KSystemERP(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.introSection}>
                    <p className={styles.eyebrow}>제품소개</p>
                    <h1 className={styles.pageTitle}>K-System ERP</h1>
                    <p className={styles.lead}>
                        {`K-System ERP는 국내 최초로 한국형 ERP를 선보인 영림원소프트랩이 20년 이상 축적한 기술을 바탕으로 만든 ERP 솔루션입니다.
                          통합적이고 직관적인 업무 환경을 제공하며, 국내·외 2,600여 개 고객사가 사용하고 있는 검증된 제품입니다.`}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.title}>기업 디지털 전환을 위한 ERP</h2>
                    <p className={styles.subTitle}>디지털 시대에 필요한 통합적이고 직관적인 Business Practice를 제공합니다.</p>

                    <div className={styles.cardGrid}>
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className={styles.card}>
                                <h3>{feature.title}</h3>
                                <ul>
                                    {feature.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.title}>산업군별 특화 프로세스</h2>
                    <p className={styles.subTitle}>공공, 일반 제조, PMS 등 산업군에 맞춘 업무 프로세스와 특화 패키지를 제공합니다.</p>

                    <div className={styles.industryGrid}>
                        {INDUSTRIES.map((industry) => (
                            <div key={industry.name} className={styles.industryItem}>
                                <h3>{industry.name}</h3>
                                <ul>
                                    {industry.modules.map((module) => (
                                        <li key={module}>{module}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.title}>현장에 밀착된 프로세스 기반 자율형 ERP</h2>
                    <p className={styles.subTitle}>구축 컨설팅부터 업무 처리, 적기 마감, 경영 개선까지 프로세스 중심으로 운영됩니다.</p>

                    <div className={styles.cardGrid}>
                        {PROCESSES.map((process, index) => (
                            <div key={process.title} className={styles.card}>
                                <span className={styles.step}>{String(index + 1).padStart(2, '0')}</span>
                                <h3>{process.title}</h3>
                                <ul>
                                    {process.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.title}>경영분석 모델과 융합된 ERP</h2>
                    <p className={styles.subTitle}>
                        {`K-System 경영분석 패키지는 데이터 기반의 통찰력을 제공합니다.
                          고객사는 두 개 이상의 모델을 선택해 도입할 수 있으며, 수정·추가 개발로 기업에 맞게 커스터마이징할 수 있습니다.`}
                    </p>

                    <div className={styles.tableWrapper}>
                        <table className={styles.analysisTable}>
                            <thead>
                                <tr>
                                    <th scope="col">영역</th>
                                    <th scope="col">경영 분석 모델</th>
                                    {ANALYSIS_COLUMNS.map((column) => (
                                        <th key={column} scope="col">
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {ANALYSIS_MODELS.map((row) => (
                                    <tr key={row.model}>
                                        <td>{row.area}</td>
                                        <th scope="row">{row.model}</th>
                                        {ANALYSIS_COLUMNS.map((column) => (
                                            <td key={column} className={styles.check}>
                                                {row.checks.includes(column) ? <span aria-label="해당">●</span> : ''}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

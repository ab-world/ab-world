// K-System ERP 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: 'K-System ERP - (주)에이비', description: `K-System ERP는 영림원소프트랩이 20년 이상 축적한 기술로 만든 ERP 솔루션으로, 국내·외 2,600여 개 고객사가 사용합니다. 제약·화학·식품/유통·자동차부품·공공 등 산업별 특화 기능을 제공합니다.`, asPath: `/k-system-erp` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

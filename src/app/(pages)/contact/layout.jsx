// 데모신청 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({
    title: 'ERP·WMS 데모신청 - (주)에이비',
    description: `K-System ERP, 유통 통합관리 WMS COSMOS, 로우코드 플랫폼 Flextudio 데모를 신청하세요. (주)에이비가 방문 데모와 도입 상담을 안내해 드립니다.`,
    asPath: `/contact`
});

export default function RootLayout({ children }) {
    return <>{children}</>;
}

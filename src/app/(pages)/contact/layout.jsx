// 도입문의 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: '도입문의 - (주)에이비', description: `(주)에이비 도입문의 페이지입니다. ERP·WMS 구축, 웹·앱 플랫폼 개발, 비즈니스 컨설팅 등 IT 솔루션 도입을 상담해 드립니다.`, asPath: `/contact` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

// 도입문의 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: '도입문의 - 에이비', asPath: `/contact` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

// 찾아오시는 길 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: '찾아오시는 길 - 에이비', asPath: `/map` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

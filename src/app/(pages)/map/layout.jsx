// 찾아오시는 길 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: '찾아오시는 길 - (주)에이비', description: `(주)에이비 본사 찾아오시는 길 안내입니다. 9호선 가양역 7번 출구에서 3분 거리입니다.`, asPath: `/map` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

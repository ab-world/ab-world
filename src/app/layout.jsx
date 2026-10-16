// Root 레이아웃
import '@/style/globals.scss';
import { Noto_Sans_KR } from 'next/font/google';
import { getMetadata } from '@/util/seo';

// 한글은 Google Fonts의 unicode-range 분할 파일로 필요한 글자만 내려받음 (preload는 latin만)
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], display: 'swap', variable: '--font-noto-sans-kr' });

export const metadata = getMetadata();

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={notoSansKR.variable}>
            <body>{children}</body>
        </html>
    );
}

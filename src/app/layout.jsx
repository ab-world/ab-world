// Root 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata();

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <link rel="preload" href="/font/NotoSansKR-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    );
}

// 샘플 레이아웃
import '@/style/globals.scss';

export const metadata = {
    title: 'AB마켓',
    description: 'AB마켓',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}

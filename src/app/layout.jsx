// Root 레이아웃
import '@/style/globals.scss';

export const metadata = {
    title: 'Above Business Solution',
    description: 'Above Business Solution',
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

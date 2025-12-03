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
            <head>
                <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=zQD80kNT9CiIDMhrDGEA" async></script>
            </head>

            <body>{children}</body>
        </html>
    );
}

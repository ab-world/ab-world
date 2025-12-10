// Map 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ asPath: `/map` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

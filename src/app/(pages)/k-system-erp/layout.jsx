// K-System ERP 레이아웃
import '@/style/globals.scss';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata({ title: 'K-System ERP - 에이비', asPath: `/k-system-erp` });

export default function RootLayout({ children }) {
    return <>{children}</>;
}

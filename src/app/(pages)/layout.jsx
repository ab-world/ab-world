'use client';
import { Suspense, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import NotiStackProvider from '@/component/common/snackbar/NotiStackProvider';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import UpBtn from '@/component/common/UpBtn';
import { JWT_TOKEN_ID } from '@/const/variable';

export default function RootLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        if (!localStorage.getItem(JWT_TOKEN_ID + '-browser')) {
            localStorage.setItem(JWT_TOKEN_ID + '-browser', Math.random().toString(36).slice(2).toUpperCase() + '_' + Math.random().toString(36).slice(2).toUpperCase());
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <Header />
                {children}
                <Footer />
                {/* <UpBtn /> */}
            </Provider>

            <NotiStackProvider />
        </Suspense>
    );
}

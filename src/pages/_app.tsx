import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../../styles/globals.css';
import * as gtag from '../lib/gtag';
import Layout from '../components/Layout';
import Script from 'next/script';
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.NEXT_PUBLIC_GA_ID}', {
                        page_path: window.location.pathname,
                    });
                `,
                }}
            />
            <ChakraProvider>
                <Layout>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Component {...pageProps} />
                    </React.Suspense>
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;

import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Layout>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Component {...pageProps} />
                </React.Suspense>
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;

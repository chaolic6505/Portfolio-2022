import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import getSocials from '../lib/https/getSocials';
import getPageInfo from '../lib/https/getPageInfo';
import { PageInfo, Social } from '../typings';
import { sanityClient } from '.././lib/sanity';
import Script from 'next/script';

type Props = {
    socials: Social[];
    pageInfo: PageInfo;
};

export default function Home({ socials, pageInfo }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <div
            className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
        >
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <title>{"Chao-Li's Portfolio"}</title>
            </Head>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="ga-script" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            {/* Header */}
            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>
        </div>
    );
}

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    let socials = await sanityClient.fetch(getSocials);
    let pageInfo = await sanityClient.fetch(getPageInfo);

    // By returning { props: { socials } }, the Home component
    // will receive `socials` as a prop at build time
    return {
        props: {
            socials,
            pageInfo,
        },
        revalidate: 10,
    };
};

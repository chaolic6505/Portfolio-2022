import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import getSocials from '../lib/https/getSocials';
import getPageInfo from '../lib/https/getPageInfo';
import { PageInfo, Social } from '../typings';
import { sanityClient } from '.././lib/sanity';

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
            {/* Header */}
            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
        </div>
    );
}

export const getStaticProps = async () => {
    let socials = await sanityClient.fetch(getSocials);
    let pageInfo = await sanityClient.fetch(getPageInfo);

    return {
        props: {
            socials,
            pageInfo,
        },
        revalidate: 10,
    };
};

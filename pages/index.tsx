import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
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
    };
};

import { useEffect, useState } from 'react';

import Skills from '../components/Skills';
import Hero from '../components/Hero';
import About from '../components/About';
import Header from '../components/Header';
import WorkExperience from '../components/WorkExperience';
import getSkills from '../lib/https/getSkills';
import getSocials from '../lib/https/getSocials';
import getPageInfo from '../lib/https/getPageInfo';
import getExperiences from '../lib/https/getExpoeriences';
import { sanityClient } from '.././lib/sanity';
import { Experience, PageInfo, Social, Skill } from '../typings';

type Props = {
    skills: Skill[];
    socials: Social[];
    pageInfo: PageInfo;
    experiences: Experience[];
};

export default function Home({
    skills,
    socials,
    pageInfo,
    experiences,
}: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <div
            className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-none"
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

            {/* Experiences */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
        </div>
    );
}

export const getStaticProps = async () => {
    let skills = await sanityClient.fetch(getSkills);
    let socials = await sanityClient.fetch(getSocials);
    let pageInfo = await sanityClient.fetch(getPageInfo);
    let experiences = await sanityClient.fetch(getExperiences);

    return {
        props: {
            skills,
            socials,
            pageInfo,
            experiences,
        },
        revalidate: 10,
    };
};

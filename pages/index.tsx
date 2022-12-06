import { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import getSkills from '../lib/https/getSkills';
import getSocials from '../lib/https/getSocials';
import getProjects from '../lib/https/getProjects';
import getPageInfo from '../lib/https/getPageInfo';
import getExperiences from '../lib/https/getExpoeriences';
import { sanityClient } from '.././lib/sanity';
import { Experience, PageInfo, Social, Skill, Project } from '../typings';

type Props = {
    skills: Skill[];
    socials: Social[];
    projects: Project[];
    pageInfo: PageInfo;
    experiences: Experience[];
};

export default function Home({
    skills,
    socials,
    projects,
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

            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>
        </div>
    );
}

export const getStaticProps = async () => {
    let skills = await sanityClient.fetch(getSkills);
    let socials = await sanityClient.fetch(getSocials);
    let projects = await sanityClient.fetch(getProjects);
    let pageInfo = await sanityClient.fetch(getPageInfo);
    let experiences = await sanityClient.fetch(getExperiences);

    return {
        props: {
            skills,
            socials,
            projects,
            pageInfo,
            experiences,
        },
        revalidate: 10,
    };
};

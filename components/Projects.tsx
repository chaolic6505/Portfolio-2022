import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Project } from '../typings';
import ProjectCard from './Project';
import { urlFor } from '../lib/sanity';

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <div className=" cursor-pointer relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80">
                {projects?.map((project) => (
                    <ProjectCard
                        key={project._id}
                        title={project.title}
                        imageURL={urlFor(project.image).url()}
                        summary={project.summary}
                        linkToBuild={project.linkToBuild}
                        technologies={project.technologies}
                    />
                ))}
            </div>

            <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}

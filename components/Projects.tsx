import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Project } from '../typings';
import { urlFor } from '../lib/sanity';

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" w-screen md:w-full text-left flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80"
        >
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80">
                {projects?.map((project) => (
                    <div
                        key={project._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
                    >
                        <motion.img
                            alt="project-image"
                            viewport={{ once: true }}
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            src={urlFor(project?.image).url()}
                            className="h-64 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                        />

                        <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl justify-center columns-1 align-baseline">
                            <Link key={project._id} href={project.linkToBuild}>
                                <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center cursor-pointer underline">
                                    {project?.title}
                                </h4>
                            </Link>

                            <div className="flex items-center space-x-2 justify-center ">
                                {project?.technologies.map((technology) => (
                                    <img
                                        key={technology._id}
                                        alt="technology-used-image"
                                        className="h-10 w-10 rounded-full object-cover"
                                        src={urlFor(technology?.image).url()}
                                    />
                                ))}
                            </div>

                            <p className="text-sm md:text-md lg:text-lg text-justify">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}

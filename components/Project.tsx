import React from 'react';
import { motion } from 'framer-motion';
import { Technology } from '../typings';
import Link from 'next/link';

type Props = {
    key: string;
    title: string;
    summary: string;
    imageURL: string;
    linkToBuild: string;
    technologies: Technology[];
};

export default function Project({
    key,
    title,
    summary,
    imageURL,
    linkToBuild,
    technologies,
}: Props) {
    console.log(key, title, summary, linkToBuild, technologies);
    return (
        <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
                <button
                    onClick={movePrev}
                    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled('prev')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span className="sr-only">Prev</span>
                </button>
                <button
                    onClick={moveNext}
                    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled('next')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div
                ref={carousel}
                className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
                {data.resources.map((resource, index) => {
                    return (
                        <div
                            key={index}
                            className="carousel-item text-center relative w-64 h-64 snap-start"
                        >
                            <a
                                href={resource.link}
                                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                style={{
                                    backgroundImage: `url(${
                                        resource.imageUrl || ''
                                    })`,
                                }}
                            >
                                <img
                                    src={resource.imageUrl || ''}
                                    alt={resource.title}
                                    className="w-full aspect-square hidden"
                                />
                            </a>
                            <a
                                href={resource.link}
                                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                            >
                                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                                    {resource.title}
                                </h3>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// <Link key={project._id} href={project.linkToBuild}>
//     <div
//         key={project._id}
//         classNameName="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
//     >
//         <motion.img
//             alt="project-image"
//             viewport={{ once: true }}
//             initial={{ y: -100, opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             src={urlhtmlFor(project?.image).url()}
//             classNameName="rounded-lg  mb-2 object-cover object-center"
//         />

//         <div classNameName="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
//             <h4 classNameName="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
//                 {project?.title}
//             </h4>

//             <div classNameName="flex items-center space-x-2 justify-center ">
//                 {project?.technologies.map((technology) => (
//                     <img
//                         key={technology._id}
//                         alt="technology-used-image"
//                         classNameName="h-10 w-10 rounded-full object-cover"
//                         src={urlhtmlFor(
//                             technology?.image
//                         ).url()}
//                     />
//                 ))}
//             </div>

//             <p classNameName="text-sm md:text-md lg:text-lg text-justify ">
//                 {project?.summary}
//             </p>
//         </div>
//     </div>
// </Link>

import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../lib/sanity';
// import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = { pageInfo: PageInfo };

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};


export default function About({ pageInfo }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src={urlFor(pageInfo?.heroImage).url()}
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10">
                <h4 className="text-xl md:text-4xl font-semibold">
                    Here is a{' '}
                    <span className=" underline decoration-green-300">
                        little
                    </span>{' '}
                    background
                </h4>
                <p className="text-sm md:text-lg lg:text-lg text-justify">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}

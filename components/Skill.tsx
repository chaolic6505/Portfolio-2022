import React from 'react';
import { motion } from 'framer-motion';

import { urlFor } from '../lib/sanity';
import { Skill as mySkill } from '../typings';

type Props = {
    skill: mySkill;
    directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                alt="skill-image"
                transition={{ duration: 1 }}
                src={urlFor(skill?.image).url()}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
                className="rounded-full border-2 border-darkGreen object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl md:text-3xl font-bold text-slate-600 opacity-100">
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    );
}

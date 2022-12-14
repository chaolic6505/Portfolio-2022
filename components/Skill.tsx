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
        <div className="group relative flex cursor-pointer flex-col items-center">
            <motion.img
                alt="skill-image"
                transition={{ duration: 1 }}
                src={urlFor(skill?.image).url()}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
                className="rounded-full border-2 border-darkGreen object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-25 2xl:h-25 filter group-hover:grayscale transition duration-300 ease-in-out"
            />

            <p className="text-sm font-bold text-slate-600 opacity-100">
                {skill.progress}%
            </p>
        </div>
    );
}

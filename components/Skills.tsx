import { motion } from 'framer-motion';
import React from 'react';
import { Skill as SkillType } from '../typings';
import Skill from './Skill';

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
        >
            <div className="grid grid-cols-4 gap-5 md:gap-5">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}

                {skills
                    ?.slice(skills.length / 2, skills.length)
                    .map((skill) => (
                        <Skill key={skill._id} skill={skill} directionLeft />
                    ))}
            </div>
            <h3 className="absolute uppercase tracking-[3px] text-gray-600 text-md bottom-20">
                Hover over a skill for current proficiency
            </h3>
        </motion.div>
    );
}

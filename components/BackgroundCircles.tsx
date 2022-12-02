import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '80%', '20%'],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative flex justify-center items-center"
        >
            <div
                className="absolute border border-slate-500 opacity-50 rounded-full h-[100px] w-[100px] mt-64 md:mt:52 
            animate-ping"
            />
            <div />
            <div
                className="absolute border border-slate-500 opacity-50 rounded-full h-[200px] w-[200px] mt-64 md:mt:52 
            animate-ping"
            />
            <div />
            <div
                className="absolute border-2 border-slate-500  opacity-50 rounded-full h-[300px] w-[300px] mt-64 md:mt:52 
            animate-ping"
            />
            <div />
        </motion.div>
    );
}

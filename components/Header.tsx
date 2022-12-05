import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { useColorMode } from '@chakra-ui/color-mode';

import { Social } from '../typings';
import ThemeSwitch from './ThemeSwitch';

type Props = {
    socials: Social[];
};

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export default function Header({ socials }: Props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ delay: 0.6, duration: 1.0 }}
                className=" flex flex-row items-center"
            >
                {socials.map((social) => (
                    <motion.button
                        key={social._id}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <SocialIcon
                            url={social.url}
                            key={social._id}
                            fgColor="gray"
                            bgColor="transparent"
                        />
                    </motion.button>
                ))}
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ delay: 0.6, duration: 1.0 }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                {/* <Link href="#contact" passHref>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <SocialIcon
                            fgColor="grey"
                            network="email"
                            bgColor="transparent"
                            className="cursor-pointer"
                        />
                        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                            Get in touch
                        </p>
                    </motion.button>
                </Link> */}

                <ThemeSwitch
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />
            </motion.div>
        </header>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type Props = {
    colorMode: string;
    toggleColorMode: () => void;
};

export default function ThemeSwitch({ colorMode, toggleColorMode }: Props) {
    return (
        <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <IconButton
                mt={0}
                ml={10}
                aria-label="Toggle Mode"
                onClick={toggleColorMode}
            >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
        </motion.button>
    );
}

import React from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

type Props = {
    colorMode: string;
    toggleColorMode: () => void;
};

export default function ThemeSwitch({ colorMode, toggleColorMode }: Props) {
    return (
        <IconButton
            mt={0}
            ml={5}
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
        >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
    );
}

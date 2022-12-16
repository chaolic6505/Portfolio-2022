import * as React from 'react';
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    Tooltip,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props: any) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const handleClick = () => {
        toggleColorMode();
    };

    return (
        <Tooltip
            label={text === 'dark' ? 'Dark mode' : 'Light mode'}
            aria-label="A tooltip"
        >
            <IconButton
                size="lg"
                fontSize="lg"
                variant="ghost"
                color="current"
                marginLeft="2"
                onClick={handleClick}
                icon={<SwitchIcon />}
                aria-label={`Switch to ${text} mode`}
                _hover={{
                    bg: useColorModeValue('gray.300', 'blue.800'),
                }}
                {...props}
            />
        </Tooltip>
    );
};

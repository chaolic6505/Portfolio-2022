import React from 'react';
import {
    Stack,
    IconButton,
    Link,
    Box,
    Text,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import { colors, siteConfig } from '../constant';

const iconProps = {
    variant: 'ghost',
    size: 'lg',
    isRound: true,
};

const Footer = () => {
    return (
        <Stack
            as="footer"
            isInline
            spacing={[1, 2]}
            p={4}
            justifyContent="space-between"
            alignItems="center"
            w={['100%', '90%', '90%']}
            maxW="container.lg"
            mx="auto"
        >
            <Flex
                w="100%"
                alignItems="center"
                flexDirection={['column', 'column', 'row']}
                justifyContent={['center', 'space-between']}
                flexFlow={['column-reverse', 'column-reverse']}
            >
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color={useColorModeValue(
                        colors.lightGray,
                        colors.lightPink
                    )}
                >
                    © {new Date().getFullYear()} Chao-Li Chen - All Rights
                    Reserved{' '}
                </Text>

                <Box textAlign="center">
                    {siteConfig.author.accounts.map((sc, index) => (
                        <IconButton
                            isExternal
                            {...iconProps}
                            as={Link}
                            key={index}
                            href={sc.url}
                            size="lg"
                            icon={sc.icon}
                            aria-label={sc.name}
                            colorScheme={sc.type}
                        />
                    ))}
                </Box>
            </Flex>
        </Stack>
    );
};

export default Footer;

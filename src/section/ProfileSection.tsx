import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import {
    Box,
    Link,
    Flex,
    Button,
    Heading,
    SlideFade,
    ButtonGroup,
    useColorModeValue,
} from '@chakra-ui/react';

import Paragraph from '../components/Paragraph';

const ProfileSection = () => {
    return (
        <SlideFade in offsetX={80}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        mb={3}
                        fontSize={{ base: '28px', md: '40px', lg: '48px' }}
                    >
                        <span className="waving-hand">👋</span> Hey, I am
                        Chao-Li
                    </Heading>
                </Flex>
                <Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
                    Full Stack Developer
                </Paragraph>
                <Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
                    I Love{' '}
                    <Link
                        fontWeight="500"
                        _hover={{ textDecoration: 'none' }}
                        color={useColorModeValue('pink.500', 'pink.400')}
                    >
                        Food.tsx{' '}
                    </Link>
                    and{' '}
                    <Link
                        fontWeight="500"
                        _hover={{ textDecoration: 'none' }}
                        color={useColorModeValue('pink.500', 'pink.400')}
                    >
                        OutdoorActivity.java{' '}
                    </Link>
                    {'\n'}
                </Paragraph>
                <Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
                    I focused on creating clean, responsive websites and mobile
                    applications with{' '}
                    <Link
                        fontWeight="500"
                        _hover={{ textDecoration: 'none' }}
                        color={useColorModeValue('pink.500', 'pink.400')}
                    >
                        React{' '}
                    </Link>
                    and{' '}
                    <Link
                        fontWeight="500"
                        _hover={{ textDecoration: 'none' }}
                        color={useColorModeValue('pink.500', 'pink.400')}
                    >
                        React Native{' '}
                    </Link>
                </Paragraph>

                <Box mt={5}>
                    <ButtonGroup>
                        <Link
                            href={'mailto:chaolic6505@gmail.comt'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                size="md"
                                margin={'5px'}
                                variant="ghost"
                                colorScheme="pink"
                                leftIcon={<BiPhoneCall color={'pink.500'} />}
                            >
                                Contact Me
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Box>
            </Box>
        </SlideFade>
    );
};

export default ProfileSection;

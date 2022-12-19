import React from 'react';
import Head from 'next/head';
import {
    Box,
    Flex,
    Wrap,
    Stack,
    VStack,
    Heading,
    Container,
    SlideFade,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

import { MotionBox } from '../utils/motion';
import { SiCodeproject } from 'react-icons/si';

import { colors, projects } from '../constant';
import styles from '../../styles/Home.module.css';
import CompanyCard from '../components/CompanyCard';

function Projects() {
    const { colorMode } = useColorMode();
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Full Stack Developer" />
                <link rel="icon" href="/profile_picture.png" />
            </Head>

            <main>
                <Container
                    mt={['5', '10']}
                    mb={['5', '10']}
                    maxW="container.lg"
                >
                    <SlideFade in offsetX={80}>
                        <Box>
                            <Flex alignItems={'center'}>
                                <Stack pr={3}>
                                    <SiCodeproject size={'40px'} />
                                </Stack>
                                <Heading
                                    color={useColorModeValue(
                                        colors.darkGray,
                                        colors.lightPink
                                    )}
                                >
                                    Projects I've Worked On
                                </Heading>
                            </Flex>

                            <VStack
                                mt={5}
                                align="left"
                                spacing={4}
                                mx={[0, 0, 6]}
                                marginBottom={6}
                            >
                                <Wrap mt={5} spacing={1} alignItems="center">
                                    {projects.map((project, index) => (
                                        <MotionBox
                                            key={index}
                                            whileHover={{ y: -5 }}
                                        >
                                            <CompanyCard
                                                key={index}
                                                company={project}
                                                colorMode={colorMode}
                                            />
                                        </MotionBox>
                                    ))}
                                </Wrap>
                            </VStack>
                        </Box>
                    </SlideFade>
                </Container>
            </main>
        </div>
    );
}

export default Projects;

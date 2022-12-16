import React from 'react';
import {
    Box,
    Flex,
    Stack,
    Heading,
    Container,
    SlideFade,
} from '@chakra-ui/react';
import Head from 'next/head';
import { AiFillStar } from 'react-icons/ai';

import styles from '../../styles/Home.module.css';
import Paragraph from '../components/Paragraph';
import { UnderlinedText } from '../components/UnderlinedText';

function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
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
                            <UnderlinedText>
                                <Flex alignItems={'center'}>
                                    <Stack pr={3}>
                                        <span className="waving-hand">👋</span>
                                    </Stack>
                                    <Heading>About Me</Heading>
                                </Flex>
                            </UnderlinedText>

                            <Paragraph
                                textProps={{
                                    my: 5,
                                    fontSize: 'lg',
                                    lineHeight: 1.6,
                                }}
                            >
                                <p>
                                    I am a full stack developer with 3 years
                                    experience in building clean and reponsive
                                    web and mobile apps.
                                </p>
                            </Paragraph>
                        </Box>
                    </SlideFade>
                </Container>
            </main>
        </div>
    );
}

export default About;

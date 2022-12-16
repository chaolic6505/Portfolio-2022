import React from 'react';
import {
    Box,
    Flex,
    Stack,
    VStack,
    Heading,
    Container,
    SlideFade,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { MdWorkOutline } from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiFillStar, AiFillEye } from 'react-icons/ai';
import { MotionBox } from '../utils/motion';
import { colors, companies } from '../constant';
import styles from '../../styles/Home.module.css';
import Paragraph from '../components/Paragraph';
import CompanyCard from '../components/CompanyCard';
import { UnderlinedText } from '../components/UnderlinedText';

function About() {
    const { colorMode } = useColorMode();
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
                            <Flex alignItems={'center'}>
                                <Stack pr={3}>
                                    <AiFillEye size={'30px'} />
                                </Stack>
                                <Heading
                                    color={useColorModeValue(
                                        colors.lightGray,
                                        colors.lightPink
                                    )}
                                >
                                    About Me
                                </Heading>
                            </Flex>

                            <Paragraph
                                textProps={{
                                    my: 5,
                                    fontSize: 'lg',
                                    lineHeight: 1.6,
                                }}
                            >
                                I am a Vancouver based Full-Stack Developer
                                focusing on creating clean and responsive web
                                and mobile applications.
                            </Paragraph>

                            <Paragraph
                                textProps={{
                                    my: 5,
                                    fontSize: 'lg',
                                    lineHeight: 1.6,
                                }}
                            >
                                In my current position at Sitemax, I am the lead
                                mobile developer; I am responsible for
                                monitoring performance, updating library
                                dependencies, and creating all the new features
                                for the mobile app with React Native and Redux.
                                My responsibilities also include creating custom
                                PDF forms at the client’s request and updating
                                content and style for the company’s website.
                            </Paragraph>

                            <Flex alignItems="center" my={10}>
                                <Flex alignItems={'center'}>
                                    <Stack pr={3}>
                                        <MdWorkOutline size={'30px'} />
                                    </Stack>

                                    <Heading
                                        color={useColorModeValue(
                                            colors.lightGray,
                                            colors.lightPink,
                                        )}
                                    >
                                        Career
                                    </Heading>
                                </Flex>
                            </Flex>

                            <VStack
                                mt={5}
                                align="left"
                                spacing={4}
                                mx={[0, 0, 6]}
                                marginBottom={6}
                            >
                                {companies.map((company, index) => (
                                    <MotionBox
                                        key={index}
                                        whileHover={{ y: -5 }}
                                    >
                                        <CompanyCard
                                            key={index}
                                            company={company}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>
                        </Box>
                    </SlideFade>
                </Container>
            </main>
        </div>
    );
}

export default About;

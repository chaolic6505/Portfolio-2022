import React from 'react';
import { Grid, Heading, SlideFade, useColorModeValue } from '@chakra-ui/react';

import { skill } from '../../typings';
import { colors } from '../constant';
import StackCard from '../components/StackCard';

interface Props {
    title: string;
    skills: skill[];
}
const TechSkillsection = ({ title, skills }: Props) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                mb={3}
                color={useColorModeValue(colors.lightGray, colors.lightPink)}
                fontSize={{ base: '24px', md: '30px', lg: '36px' }}
            >
                {title}
            </Heading>
            <Grid
                mt={5}
                gap={[2, 5, 5, 5]}
                templateColumns={[
                    '1fr',
                    'repeat(2,1fr)',
                    'repeat(3, 1fr)',
                    'repeat(4, 1fr)',
                ]}
            >
                {skills.map((skill) => (
                    <StackCard skill={skill} key={skill?.name} />
                ))}
            </Grid>
        </SlideFade>
    );
};

export default TechSkillsection;

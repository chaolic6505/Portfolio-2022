import React from 'react';
import {
    Grid,
    Heading,
    SlideFade,
    useColorModeValue,
} from '@chakra-ui/react';

import { colors, languages } from '../constant';
import StackCard from '../components/StackCard';

interface Props {
    title: string;
}
const TechSkillsection = ({ title }: Props) => {
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
                gap={[2, 5, 5, 5, 5]}
                templateColumns={[
                    '1fr',
                    'repeat(2,1fr)',
                    'repeat(3, 1fr)',
                    'repeat(4, 1fr)',
                    'repeat(5, 1fr)',
                ]}
            >
                {languages.map((language) => (
                    <StackCard skill={language} key={language?.name} />
                ))}
            </Grid>
        </SlideFade>
    );
};

export default TechSkillsection;

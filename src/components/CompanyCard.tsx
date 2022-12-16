import React from 'react';
import {
    Tag,
    Flex,
    Text,
    Stack,
    Image,
    LinkBox,
    Heading,
    LinkOverlay,
    useColorModeValue,
} from '@chakra-ui/react';
import { Company } from '../types/company';
import { colors } from '../constant';

interface ICompanyCard {
    company: Company;
    colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
    return (
        <LinkBox
            px={4}
            py={5}
            rounded="xl"
            position="relative"
            borderWidth="1px"
            _hover={{
                borderColor: colors.lightPink,
            }}
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('gray.100', 'gray.700')}
        >
            <LinkOverlay href={company.url} rel="noopener" isExternal>
                <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                            h={16}
                            w={16}
                            rounded="full"
                            objectFit="cover"
                            alt={company.alt}
                            src={company.logo}
                        />
                        <Stack spacing={2} pl={3} align="left">
                            <Heading
                                fontSize="xl"
                                color={`mode.${colorMode}.career.text`}
                            >
                                {company.title}
                            </Heading>
                            <Heading
                                fontSize="sm"
                                color={`mode.${colorMode}.career.subtext`}
                            >
                                {company.role}
                            </Heading>
                            <Stack
                                mt={5}
                                isInline
                                spacing={1}
                                alignItems="center"
                                display={['none', 'none', 'flex', 'flex']}
                            >
                                {company.jobs.map((skill) => (
                                    <Tag
                                        size="sm"
                                        padding="0 5px"
                                        key={skill}
                                        color={useColorModeValue(
                                            colors.lightGray,
                                            colors.lightBlue
                                        )}
                                    >
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                            <Stack
                                mt={5}
                                isInline
                                spacing={1}
                                alignItems="center"
                                display={['none', 'none', 'flex', 'flex']}
                            >
                                {company.skills.map((skill) => (
                                    <Tag size="sm" padding="0 5px" key={skill}>
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                        </Stack>
                    </Flex>
                    <Stack display={['none', 'none', 'flex', 'flex']}>
                        <Text
                            fontSize={14}
                            color={`mode.${colorMode}.career.subtext`}
                        >
                            {company.period}
                        </Text>
                    </Stack>
                </Flex>
                <Stack
                    mt={5}
                    spacing={1}
                    alignItems="center"
                    display={['flex', 'flex', 'none', 'none']}
                >
                    {company.skills.map((skill) => (
                        <Tag size="sm" padding="0 5px" key={skill}>
                            {skill}
                        </Tag>
                    ))}
                </Stack>
            </LinkOverlay>
        </LinkBox>
    );
};

export default CompanyCard;

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
    Wrap,
    WrapItem,
    Container,
} from '@chakra-ui/react';
import { Company } from '../../typings';
import { colors } from '../constant';

interface ICompanyCard {
    company: Company;
    colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
    let bgColor = useColorModeValue('white', 'gray.800');
    let borderColor = useColorModeValue('gray.100', 'gray.700');
    let tagColor = useColorModeValue(colors.lightGray, colors.lightBlue);
    // console.log(colorMode, 'colorMode');
    return (
        <LinkBox
            px={4}
            py={5}
            rounded="xl"
            position="relative"
            borderWidth="1px"
            bg={bgColor}
            borderColor={borderColor}
            _hover={{
                borderColor: colors.lightPink,
            }}
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
                        <Container pl={3}>
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
                            <Wrap mt={5} spacing={1} alignItems="center">
                                {company.jobs.map((job) => (
                                    <WrapItem key={job}>
                                        <Tag
                                            size="sm"
                                            key={job}
                                            color={tagColor}
                                            padding="0 5px"
                                        >
                                            {job}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                            <Wrap
                                mt={5}
                                spacing={1}
                                alignItems="center"
                                display={['none', 'none', 'flex', 'flex']}
                            >
                                {company.skills.map((skill) => (
                                    <WrapItem key={skill}>
                                        <Tag
                                            size="sm"
                                            padding="0 5px"
                                            key={skill}
                                        >
                                            {skill}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Container>
                    </Flex>
                    <Stack>
                        <Text fontSize={14} color={colors.lightPink}>
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

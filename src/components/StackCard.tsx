import React from 'react';
import {
    Text,
    Flex,
    LinkBox,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { colors } from '../constant';
import { skill } from '../types/social';
import { MotionBox } from '../utils/motion';
interface Props {
    skill: skill ;
}

const StackCard: React.FC<Props> = ({ skill }) => {
    return (
        <MotionBox whileHover={{ y: -5 }}>
            <LinkBox
                p={4}
                w="100%"
                as="article"
                role="group"
                display="flex"
                transition=".5s"
                cursor="pointer"
                borderRadius={5}
                borderWidth="1px"
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                _hover={{
                    borderColor: colors.lightPink,
                }}
            >
                <Flex alignItems="center" justifyContent="space-between">
                    <IconButton
                        as="a"
                        mr={3}
                        icon={skill?.icon}
                        aria-label={skill?.name}
                    />

                    <Flex>
                        <Text size="md">{skill?.name}</Text>
                    </Flex>
                </Flex>
            </LinkBox>
        </MotionBox>
    );
};

export default StackCard;

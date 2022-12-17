import React from 'react';
import {
    Text,
    Flex,
    LinkBox,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { skill } from '../../typings';
import { colors } from '../constant';
import { MotionBox } from '../utils/motion';
interface Props {
    skill: skill ;
}

const StackCard: React.FC<Props> = ({ skill }) => {
    return (
        <MotionBox whileHover={{ y: -5 }}>
            <LinkBox
                p={3}
                w="80%"
                as="article"
                role="group"
                display="flex"
                transition=".5s"
                borderRadius={10}
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

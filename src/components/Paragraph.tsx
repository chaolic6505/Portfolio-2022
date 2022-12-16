import React from 'react';
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

import { colors } from '../constant';

interface IParagraph {
    children: React.ReactNode;
    textProps?: TextProps;
}

const Paragraph: React.FC<IParagraph> = ({ children, textProps }) => {
    const textColor = useColorModeValue(colors.lightText, colors.darkText);

    return (
        <Text color={textColor} {...textProps}>
            {children}
        </Text>
    );
};

export default Paragraph;

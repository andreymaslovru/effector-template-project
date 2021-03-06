import React from 'react';
import {Text, TextProps} from 'react-native-elements';
import styled from 'styled-components/native';

interface CustomTextProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

const StyledCustomText = styled(Text)<CustomTextProps>`
  ${props => {
    if (props.h1) {
      return 'color: red; font-size: 48';
    } else if (props.h2) {
      return 'color: green; font-size: 32';
    } else if (props.h3) {
      return 'color: blue; font-size: 24';
    } else {
      return null;
    }
  }}
`;

export const CustomText: React.FC<CustomTextProps> = props => {
  return <StyledCustomText {...props} />;
};

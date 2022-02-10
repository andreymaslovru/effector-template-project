import React from 'react';
import {Button as ButtonRNElements, ButtonProps} from 'react-native-elements';
import styled from 'styled-components/native';

interface CustomButtonProps extends ButtonProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const StyledCustomButton = styled(ButtonRNElements).attrs<CustomButtonProps>(
  props => {
    if (props.small) {
      return {
        ...props,
        buttonStyle: {
          backgroundColor: 'red',
          padding: 5,
        },
        titleStyle: {
          color: 'black',
        },
      };
    } else if (props.medium) {
      return {
        ...props,
        buttonStyle: {
          backgroundColor: 'red',
          padding: 10,
        },
      };
    } else if (props.large) {
      return {
        ...props,
        buttonStyle: {
          backgroundColor: 'red',
          padding: 20,
        },
      };
    } else {
      return {...props};
    }
  },
)``;

export const CustomButton: React.FC<CustomButtonProps> = props => {
  return <StyledCustomButton {...props} />;
};

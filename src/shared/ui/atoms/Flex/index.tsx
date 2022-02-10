import React from 'react';
import styled from 'styled-components/native';

interface StyledFlexProps {
  flex?: number;
  dir?: string;
  align?: string;
  justify?: string;
  margin?: number;
}

export const StyledFlex = styled.View<StyledFlexProps>`
  flex: ${props => props.flex || 0};
  flex-direction: ${props => props.dir || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || 0};
`;

export const Flex: React.FC<StyledFlexProps> = props => {
  return <StyledFlex {...props} />;
};

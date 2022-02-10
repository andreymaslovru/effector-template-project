import styled from 'styled-components/native';

interface CustomTextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

export const CustomText = styled.Text<CustomTextProps>`
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

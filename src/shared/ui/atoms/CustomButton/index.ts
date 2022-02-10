import styled from 'styled-components/native';

interface CustomButtonProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const CustomButton = styled.Text<CustomButtonProps>`
  ${props => {
    if (props.small) {
      return 'background-color: red; color: white; padding: 5';
    } else if (props.medium) {
      return 'background-color: green; color: white; padding: 8';
    } else if (props.large) {
      return 'background-color: blue; color: white; padding: 14';
    } else {
      return null;
    }
  }}
`;

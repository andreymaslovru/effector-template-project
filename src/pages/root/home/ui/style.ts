import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

export const TextSC = styled.Text`
  color: red;
  font-size: 50;
`;

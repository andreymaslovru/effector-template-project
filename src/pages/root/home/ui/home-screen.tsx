import React from 'react';
import {Button} from 'react-native';
import {routerConfig} from 'pages';

import {routeNames, ScreenProps} from '../../../config';
import {Container, styles, TextSC} from './style';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <TextSC>HomeScreen</TextSC>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routerConfig.routeMap.secondPage)}
      />
    </Container>
  );
};

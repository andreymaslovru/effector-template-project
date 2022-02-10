import React from 'react';
import {Button} from 'react-native';
import {routerConfig} from 'pages';
import {CustomButton} from 'shared/ui/atoms/CustomButton';
import {CustomText} from 'shared/ui/atoms/CustomText';

import {routeNames, ScreenProps} from '../../../config';
import {Container} from './style';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Container>
      <CustomText>HomeScreen</CustomText>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routerConfig.routeMap.secondPage)}
      />
      <CustomButton />
    </Container>
  );
};

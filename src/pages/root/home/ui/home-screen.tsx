import React from 'react';
import {Button} from 'react-native';
import {routerConfig} from 'pages';
import {CustomButton} from 'shared/ui/atoms/CustomButton';
import {CustomText} from 'shared/ui/atoms/CustomText';
import {Flex} from 'shared/ui/atoms/Flex';

import {routeNames, ScreenProps} from '../../../config';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Flex flex={1} align={'center'} justify={'center'} dir={'column'}>
      <CustomText>FirstPage</CustomText>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routerConfig.routeMap.secondPage)}
      />
      <CustomButton
        title={'Plus 1'}
        onPress={() => console.log('plussss')}
        small={true}
      />
    </Flex>
  );
};

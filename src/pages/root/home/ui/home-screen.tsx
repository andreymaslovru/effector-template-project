import React from 'react';
import {Button} from 'react-native';
import {Counter} from 'entities/counter';
import {ChangeCounterBtn} from 'features/change-counter';
import {routerConfig} from 'pages';
import {Flex} from 'shared/ui/atoms/Flex';

import {routeNames, ScreenProps} from '../../../config';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <Flex flex={1} align={'center'} justify={'center'} dir={'column'}>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routerConfig.routeMap.secondPage)}
      />
      <ChangeCounterBtn />
      <Counter />
    </Flex>
  );
};

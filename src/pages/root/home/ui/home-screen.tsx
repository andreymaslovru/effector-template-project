import React from 'react';
import {Button, Text, View} from 'react-native';
import {routerConfig} from 'pages';

import {routeNames, ScreenProps} from '../../../config';
import {styles} from './style';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routerConfig.routeMap.secondPage)}
      />
    </View>
  );
};

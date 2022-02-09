import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

interface SecondPageProps {}

export const SecondPage: React.FC<SecondPageProps> = () => {
  return (
    <View style={styles.container}>
      <Text>SecondPage</Text>
    </View>
  );
};

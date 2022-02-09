import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routerConfig} from 'pages';
import {HomeScreen} from 'pages/root/home';
import {SecondPage} from 'pages/root/second-page';

const Stack = createStackNavigator<routerConfig.ParamList>();

export const Router = () => (
  <Stack.Navigator>
    <Stack.Screen name={routerConfig.routeMap.home} component={HomeScreen} />
    <Stack.Screen
      name={routerConfig.routeMap.secondPage}
      component={SecondPage}
    />
  </Stack.Navigator>
);

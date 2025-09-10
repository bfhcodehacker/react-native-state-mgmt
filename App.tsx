import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StaticParamList } from '@react-navigation/native';

import { HomeScreen } from './src/screens/Home';
import { StateScreen } from './src/screens/State';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerTitleAlign: 'center'
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Introduction'
      }
    },
    State: {
      screen: StateScreen,
      options: {
        title: 'State Test'
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default function App() {
  return <Navigation />;
}
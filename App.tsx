import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StaticParamList } from '@react-navigation/native';

import { HomeScreen } from './src/screens/Home';
import { StateScreen } from './src/screens/State';
import { ZustandScreen } from './src/screens/Zustand';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerTitleAlign: 'center'
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false
      }
    },
    State: {
      screen: StateScreen,
      options: {
        title: 'useState',
        headerStyle: {
          backgroundColor: '#F8C8DC'
        }
      }
    },
    Zustand: {
      screen: ZustandScreen,
      options: {
        title: 'Zustand',
        headerStyle: {
          backgroundColor: '#48bfeeff'
        }
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default function App() {
  return <Navigation />;
}
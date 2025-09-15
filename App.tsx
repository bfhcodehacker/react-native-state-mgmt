import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StaticParamList } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { reduxStore } from './src/stores/reduxStore';

import { HomeScreen } from './src/screens/Home';
import { StateScreen } from './src/screens/State';
import { ZustandScreen } from './src/screens/Zustand';
import { ReduxScreen } from './src/screens/Redux';

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
          backgroundColor: '#ffbcd5'
        }
      }
    },
    Zustand: {
      screen: ZustandScreen,
      options: {
        title: 'Zustand',
        headerStyle: {
          backgroundColor: '#83c0ff'
        }
      }
    },
    Redux: {
      screen: ReduxScreen,
      options: {
        title: 'Redux tk',
        headerStyle: {
          backgroundColor: '#3568b9'
        }
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default function App() {
  return (
    <Provider store={reduxStore}>
      <Navigation />
    </Provider>
  );
}
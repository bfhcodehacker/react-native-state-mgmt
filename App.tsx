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

import { languages, LanguageContext } from './src/context/language-context';
import { MobXScreen } from './src/screens/MobX';

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
    },
    MobX: {
      screen: MobXScreen,
      options: {
        title: 'MobX',
        headerStyle: {
          backgroundColor: '#35bbd8'
        }
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default function App() {
  const [ lang, setLanguage ] = React.useState<string>(languages.en);

  const toggleLanguage = () => {
    setLanguage(lang === languages.en ? languages.es : languages.en);
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <Provider store={reduxStore}>
        <Navigation />
      </Provider>
    </LanguageContext.Provider>
  );
}
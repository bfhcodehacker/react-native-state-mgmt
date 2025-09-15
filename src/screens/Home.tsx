import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { HomeStyles } from '../styles/Home';
import { MainStyles } from '../styles/MainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguageContext } from '../context/language-context';
import { useTranslation } from 'react-i18next';

const background = require('../assets/backgrounds/green-clouds.jpg');

export function HomeScreen() {
  const { lang } = useLanguageContext();
  const {t} = useTranslation('translation', {lng: lang, keyPrefix: 'home'});

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToStateScreen = () => {
    navigation.navigate('State');
  };

  const goToZustandScreen = () => {
    navigation.navigate('Zustand');
  };

  const goToReduxScreen = () => {
    navigation.navigate('Redux');
  }

  return (
      <ImageBackground
        source={background}
        resizeMode='cover'
        style={[MainStyles.background, HomeStyles.background]}
      >
        <View style={HomeStyles.main}>
          <Text style={HomeStyles.title}>{t('welcome')}</Text>
          <Text style={HomeStyles.text}>{t('description')}</Text>
          <Text style={[HomeStyles.text, HomeStyles.textBtnSpacing]}>
            {t('pleaseClick')}
          </Text>
          <View style={HomeStyles.buttonView}>
            <TouchableOpacity
              onPress={goToStateScreen}
              style={HomeStyles.button}
            >
              <Text style={HomeStyles.buttonText}>useState</Text>
            </TouchableOpacity>
          </View>
          <View style={HomeStyles.buttonView}>
            <TouchableOpacity
              onPress={goToZustandScreen}
              style={HomeStyles.button}
            >
              <Text style={HomeStyles.buttonText}>Zustand</Text>
            </TouchableOpacity>
          </View>
          <View style={HomeStyles.buttonView}>
            <TouchableOpacity
              onPress={goToReduxScreen}
              style={HomeStyles.button}
            >
              <Text style={HomeStyles.buttonText}>Redux tk</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyles.languageBox}>
          <LanguageToggle />
        </View>
      </ImageBackground>
  );
}
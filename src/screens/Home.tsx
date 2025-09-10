import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { HomeStyles } from '../styles/Home';
import { MainStyles } from '../styles/MainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
const background = require('../assets/backgrounds/green-clouds.jpg');

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToStateScreen = () => {
    navigation.navigate('State')
  };

  return (
      <ImageBackground source={background} resizeMode='cover' style={MainStyles.background}>
        <Text style={HomeStyles.title}>Welcome to my State Management App!</Text>
        <Text style={HomeStyles.text}>
          This is a basic todo list app to experiment with different state management solutions
        </Text>
        <Text style={[HomeStyles.text, {marginTop: 15}]}>
          Please click a link below to continue
        </Text>
        <View style={HomeStyles.buttonView}>
          <TouchableOpacity
            onPress={goToStateScreen}
            style={HomeStyles.button}
          >
            <Text style={HomeStyles.buttonText}>useState</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    
  );
}
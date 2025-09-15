import { ImageBackground } from "react-native";
import { MainStyles } from "../styles/MainStyles";

const background = require('../assets/backgrounds/white-clouds.jpg');

export function MobXScreen() {

  return (
    <ImageBackground source={background} resizeMode="cover" style={MainStyles.background}>
      
    </ImageBackground>
  );
}
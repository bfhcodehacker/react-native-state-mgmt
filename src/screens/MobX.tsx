import { ImageBackground } from "react-native";
import { MainStyles } from "../styles/MainStyles";
import MobXStore from "../stores/mobXStore";
import { MobXTodoList } from "../components/MobXTodoList";

const background = require('../assets/backgrounds/white-clouds.jpg');

export function MobXScreen() {
  
  return (
    <ImageBackground source={background} resizeMode="cover" style={MainStyles.background}>
      <MobXTodoList store={MobXStore} storageKey='mobx-key' />
    </ImageBackground>
  );
}
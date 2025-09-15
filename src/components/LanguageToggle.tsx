import { Text, TouchableOpacity, View } from 'react-native';
import { LanguageBtnStyles as styles } from '../styles/LanguageBtn';
import { languages, LanguageContext } from '../context/language-context';

const LanguageToggle = () => {
  return (
    <LanguageContext.Consumer>
      {({lang, toggleLanguage}) => (
        <TouchableOpacity style={styles.box} onPress={toggleLanguage}>
          <Text style={[styles.text, lang === languages.en && styles.selectedText]}>English</Text>
            <View style={[styles.toggleBox, lang === languages.en ? styles.enSelected : styles.esSelected]}>
              <View style={styles.toggle} />
            </View>
          <Text style={[styles.text, lang !== languages.en && styles.selectedText]}>Español</Text>
        </TouchableOpacity>
      )}
    </LanguageContext.Consumer>
  );
}

export default LanguageToggle;
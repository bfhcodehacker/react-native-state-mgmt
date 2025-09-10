import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  title: {
    marginTop: '30%',
    marginBottom: 20,
    fontSize: 20
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  buttonView: {
    marginTop: 30,
    width: '50%',
    height: 50,
    borderRadius:25,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
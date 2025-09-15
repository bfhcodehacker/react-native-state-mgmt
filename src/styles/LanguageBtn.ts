import { StyleSheet } from "react-native";

export const LanguageBtnStyles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginBottom: 50
  },
  text: {
    fontSize: 14
  },
  selectedText: {
    fontWeight: 'bold'
  },
  toggleBox: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 20,
    width: 40,
    borderRadius: 10,
    marginHorizontal: 10
  },
  enSelected: {
    justifyContent: 'flex-start'
  },
  esSelected: {
    justifyContent: 'flex-end'
  },
  toggle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#D3D3D3'
  }
})
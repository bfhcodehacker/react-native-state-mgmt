import { StyleSheet } from "react-native";

export const MainStyles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  saveBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  saveBtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black'
  },
  clearBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'black'
  },
  clearBtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },
});
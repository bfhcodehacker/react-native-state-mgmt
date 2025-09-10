import { StyleSheet } from "react-native";

export const TodoItemStyles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%'
  },
  completedBox: {
    backgroundColor: '#E5E4E2'
  },
  todoText: {
    fontSize: 14
  },
  completedText: {
    textDecorationLine: 'line-through',
    fontStyle: 'italic'
  },
  btnRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
import { StyleSheet } from "react-native";

export const TodoStyles = StyleSheet.create({
  outerBox: {
    width: '80%',
    marginHorizontal: '10%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBox: {
    backgroundColor: '#F9F6EE',
    marginHorizontal: '10%',
    borderRadius: 25,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    marginVertical: 30,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E2DFD2',
    paddingLeft: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 3
  },
  buttonRow: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  clearAllRow: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 50
  },
  noTodos: {
    fontStyle: 'italic',
    fontSize: 20
  },
  todoList: {
    width: '100%',
    height: '50%'
  }
});
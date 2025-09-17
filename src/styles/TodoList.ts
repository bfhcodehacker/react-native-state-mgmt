import { StyleSheet } from "react-native";

export const TodoStyles = StyleSheet.create({
  outerBox: {
    width: '100%',
    height: '100%'
  },
  contentBox: {
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center'
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
    fontWeight: 'bold',
    textAlign: 'center'
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
  },
  modalBackdrop: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    borderWidth: 1,
    borderColor: 'blue'
  },
  modalBox: {
    zIndex: 2,
    position: 'absolute',
    padding: 30,
    marginHorizontal: '10%',
    marginTop: '40%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    width: '100%'
  },
  modalButtonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
import { ImageBackground } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { MainStyles } from "../styles/MainStyles";
import { ReduxTodoList } from "../components/ReduxTodoList";
import { TodoType } from "../types/TodoTypes";
import {
  addTodo,
  deleteTodo,
  setTodos,
  toggleTodo,
  resetTodos }
from "../reducers/todoReducer";

const background = require('../assets/backgrounds/blue-clouds.jpg');

export function ReduxScreen() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const updateTodos = (newTodos: TodoType[]) => {
    dispatch(setTodos(newTodos));
  };
  const clearTodos = () => {
    dispatch(resetTodos());
  };
  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id));
  }
  const flipTodo = (id: string) => {
    dispatch(toggleTodo(id));
  }
  const createTodo = (todo: TodoType) => {
    dispatch(addTodo(todo));
  }

  return (
    <ImageBackground
      source={background}
      resizeMode={'cover'}
      style={MainStyles.background}
    >
      <ReduxTodoList
        storageKey='redux-todos'
        todos={todos}
        updateTodos={updateTodos}
        clearTodos={clearTodos}
        toggleTodo={flipTodo}
        deleteTodo={removeTodo}
        addTodo={createTodo}
      />
    </ImageBackground>
  );
}
import { ImageBackground } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { MainStyles } from "../styles/MainStyles";
import { TodoList } from "../components/TodoList";
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
  const createTodo = (todoText: string) => {
    dispatch(addTodo(todoText));
  }

  return (
    <ImageBackground
      source={background}
      resizeMode={'cover'}
      style={MainStyles.background}
    >
      <TodoList
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
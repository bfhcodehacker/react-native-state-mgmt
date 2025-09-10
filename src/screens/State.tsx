import { useState } from 'react';
import { ImageBackground, Text } from 'react-native';
import { MainStyles } from '../styles/MainStyles';
import { TodoType } from '../types/TodoTypes';
import { TodoList } from '../components/TodoList';

const background = require('../assets/backgrounds/red-clouds.jpg');

export function StateScreen() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const updateTodos = (todos: TodoType[]) => {
    setTodos(todos);
  };

  const clearTodos = () => {
    setTodos([]);
  }

  return (
    <ImageBackground source={background} resizeMode='cover' style={MainStyles.background}>
      <Text>State Screen</Text>
      <TodoList
        todos={todos}
        updateTodos={updateTodos}
        clearTodos={clearTodos}
      />
    </ImageBackground>
  );
}
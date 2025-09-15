import { ImageBackground } from 'react-native';
import { MainStyles } from '../styles/MainStyles';
import { TodoList } from '../components/TodoList';
import useTodoStore from '../stores/zustandStore';
import { TodoType } from '../types/TodoTypes';

const background = require('../assets/backgrounds/cute-clouds.jpg');

export function ZustandScreen() {
  const todos = useTodoStore((state) => state.todos);
  const updateTodos = useTodoStore((state) => state.setTodos);
  const clearTodos = useTodoStore((state) => state.resetTodos);

  const saveTodos = (todos: TodoType[]) => {
    updateTodos(todos);
  };

  return (
    <ImageBackground source={background} resizeMode='cover' style={MainStyles.background}>
      <TodoList
        todos={todos}
        updateTodos={saveTodos}
        clearTodos={clearTodos}
        storageKey={'zustand-todos'}
      />
    </ImageBackground>
  );
}
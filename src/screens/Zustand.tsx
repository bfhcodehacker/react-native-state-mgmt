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
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const saveTodos = (todos: TodoType[]) => {
    updateTodos(todos);
  };

  const createTodo = (todoText: string) => {
    const newTodo: TodoType = {
      id: Date.now().toString(),
      text: todoText,
      completed: false
    };
    addTodo(newTodo);    
  }

  return (
    <ImageBackground source={background} resizeMode='cover' style={MainStyles.background}>
      <TodoList
        todos={todos}
        updateTodos={saveTodos}
        clearTodos={clearTodos}
        addTodo={createTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        storageKey={'zustand-todos'}
      />
    </ImageBackground>
  );
}
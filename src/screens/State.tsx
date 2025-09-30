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
  };

  const toggleTodo = (id: string) => {
    const toggledTodos = todos.map(ntodo => {
      if (ntodo.id === id) {
        ntodo.completed = !ntodo.completed;
      }
      return ntodo;
    });
    setTodos(toggledTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (todoText: string) => {
    const newTodo: TodoType = {
      id: Date.now().toString(),
      text: todoText,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <ImageBackground source={background} resizeMode='cover' style={MainStyles.background}>
      <TodoList
        todos={todos}
        updateTodos={updateTodos}
        clearTodos={clearTodos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        storageKey={'state-todos'}
      />
    </ImageBackground>
  );
}
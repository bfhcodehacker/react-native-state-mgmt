import { create } from 'zustand';
import { TodoType } from '../types/TodoTypes';

interface TodoState {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  resetTodos: () => void;
  addTodo: (newTodo: TodoType) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos) => set(() => ({ todos: todos })),
  resetTodos: () => set({ todos: [] }),
  addTodo: (newTodo: TodoType) => set((state) => ({ todos: [...state.todos, newTodo]})),
  deleteTodo: (id: string) => set((state) => (
    { todos: state.todos.filter(todo => todo.id !== id)}
  )),
  toggleTodo: (id: string) => set((state) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })}
  ))
}));

export default useTodoStore;
import { create } from 'zustand';
import { TodoType } from '../types/TodoTypes';

interface TodoState {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  resetTodos: () => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (todos) => set(() => ({ todos: todos })),
  resetTodos: () => set({ todos: [] })
}));

export default useTodoStore;
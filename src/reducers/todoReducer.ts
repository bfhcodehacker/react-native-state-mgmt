import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/TodoTypes";

interface InitialTodoState {
  todos: TodoType[];
}

const initialState: InitialTodoState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },
    addTodo: (state, action: PayloadAction<TodoType>) => {
      const todo = action.payload;
      state.todos.push(todo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    },
    resetTodos: (state) => {
      state.todos = [];
    }
  }
});

export const { setTodos, resetTodos, deleteTodo, addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
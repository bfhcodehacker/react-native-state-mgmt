import { FC } from 'react';
import { Text, View } from 'react-native';
import { TodoType } from '../types/TodoTypes';

interface TodoListProps {
  todos: TodoType[];
  updateTodos: (todos: TodoType[]) => void;
  clearTodos: () => void;
}

export const TodoList: FC<TodoListProps> = props => {
  return (
    <View>
      <Text>Todo List</Text>
    </View>
  );
}
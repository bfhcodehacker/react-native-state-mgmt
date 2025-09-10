import { FC } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { TodoType } from '../types/TodoTypes';
import { TodoItemStyles } from '../styles/TodoListItem';
import { MainStyles } from '../styles/MainStyles';

interface TodoListItemProps {
  todo: TodoType;
  toggleChecked: (todo: TodoType) => void;
  deleteTodo: (todo: TodoType) => void;
}

export const TodoListItem: FC<TodoListItemProps> = props => {
  const fin = props.todo.completed;

  const toggleTodo = () => {
    props.toggleChecked(props.todo);
  }

  const removeTodo = () => {
    props.deleteTodo(props.todo);
  }

  return (
    <View style={[TodoItemStyles.box, fin && TodoItemStyles.completedBox]}>
      <Text style={[TodoItemStyles.todoText, fin && TodoItemStyles.completedText]}>
        {props.todo.text}
      </Text>
      <View style={TodoItemStyles.btnRow}>
        <TouchableOpacity
          onPress={toggleTodo}
          style={MainStyles.saveBtn}
        >
          <Text style={MainStyles.saveBtnText}>{fin ? 'Reopen Todo' : 'Complete Todo!'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={removeTodo}
          style={MainStyles.clearBtn}
        >
          <Text style={MainStyles.clearBtnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
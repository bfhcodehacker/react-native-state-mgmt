import { FC, useState, useEffect } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoType } from '../types/TodoTypes';
import { TodoStyles } from '../styles/TodoList';
import { MainStyles } from '../styles/MainStyles';
import { MobXTodoListItem } from './MobXTodoListItem';
import { useLanguageContext } from '../context/language-context';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { MobXStoreType, MobXTodoType } from '../stores/mobXStore';

interface TodoListProps {
  store: MobXStoreType;
  storageKey: string;
}

export const MobXTodoList: FC<TodoListProps> = observer((props) => {
  const { lang } = useLanguageContext();
  const {t} = useTranslation('translation', {lng: lang, keyPrefix: 'todo'});
  const [todoText, setTodoText] = useState('');

  const updateText = (value: string) => {
    setTodoText(value);
  }

  const clearTodo = () => {
    setTodoText('');
  }

  const saveTodo = () => {
    const newTodo: TodoType = {
      id: Date.now().toString(),
      text: todoText,
      completed: false
    };
    props.store.addTodo(newTodo.id, newTodo.text);
    const updatedTodos = [...props.store.todos, newTodo];
    clearTodo();
  }

  const toggleTodoCheck = (toggleTodo: MobXTodoType) => {
    toggleTodo.toggleCompleted();
  }

  const deleteTodo = (deleteTodo: MobXTodoType) => {
    const newTodos = props.store.todos.filter((nTodo: MobXTodoType) => {
      return nTodo.id !== deleteTodo.id;
    });
    props.store.removeTodo(deleteTodo as MobXTodoType);
  }

  const clearAllTodos = () => {
    props.store.resetTodos();
  }

  const renderTodo = ({item}: {item: MobXTodoType}) => {
    return (
      <MobXTodoListItem
        todo={item}
        toggleChecked={toggleTodoCheck}
        deleteTodo={deleteTodo}
      />
    );
  }

  return (
    <View style={TodoStyles.outerBox}>
      <View style={TodoStyles.mainBox}>
        <Text style={TodoStyles.title}>{t('title')}</Text>
        <TextInput
          maxLength={50}
          placeholder={t('placeholder')}
          onChangeText={updateText}
          value={todoText}
          style={TodoStyles.textInput}
        />
        <View style={TodoStyles.buttonRow}>
          <TouchableOpacity
            onPress={saveTodo}
            style={MainStyles.saveBtn}
          >
            <Text style={MainStyles.saveBtnText}>{t('save')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={clearTodo}
            style={MainStyles.clearBtn}
          >
            <Text style={MainStyles.clearBtnText}>{t('clear')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!props.store.todos.length ? (
        <Text style={TodoStyles.noTodos}>{t('nothingToDo')}</Text>
      ) : (
        <View style={TodoStyles.todoList}>
          <FlatList
            data={props.store.todos}
            renderItem={renderTodo}
            keyExtractor={todo => todo.id}
          />
        </View>
      )}
      {!!props.store.todos.length && (
        <View style={TodoStyles.clearAllRow}>
          <TouchableOpacity
            onPress={clearAllTodos}
            style={MainStyles.clearBtn}
          >
            <Text style={MainStyles.clearBtnText}>{t('clearAll')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});
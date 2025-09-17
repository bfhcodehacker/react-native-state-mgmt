import { FC, useState, useEffect } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoType } from '../types/TodoTypes';
import { TodoStyles } from '../styles/TodoList';
import { MainStyles } from '../styles/MainStyles';
import { TodoListItem } from './TodoListItem';
import { useLanguageContext } from '../context/language-context';
import { useTranslation } from 'react-i18next';

interface TodoListProps {
  todos: TodoType[];
  updateTodos: (todos: TodoType[]) => void;
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearTodos: () => void;
  storageKey: string;
}

export const TodoList: FC<TodoListProps> = props => {
  const { lang } = useLanguageContext();
  const {t} = useTranslation('translation', {lng: lang, keyPrefix: 'todo'});
  const [todoText, setTodoText] = useState('');

  const fetchSavedTodos = async () => {
    try {
      const oldTodos = await AsyncStorage.getItem(props.storageKey);
      if (oldTodos !== null) {
        const parsedTodos = JSON.parse(oldTodos);
        if (parsedTodos?.length) {
          props.updateTodos(parsedTodos);
        }
      }
    } catch (e) {
      console.error('error fetch saved todos')
    }
  }

  const saveTodos = async (saveTodos: TodoType[]) => {
    try {
      const jsonValue = JSON.stringify(saveTodos);
      await AsyncStorage.setItem(props.storageKey, jsonValue);
    } catch (e) {
      console.warn('error saving todos to async storage');
    }
  }

  useEffect(() => {
    fetchSavedTodos();
  }, []);

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
    props.addTodo(newTodo);
    const updatedTodos = [...props.todos, newTodo];
    saveTodos(updatedTodos);
    clearTodo();
  }

  const toggleTodoCheck = (toggleTodo: TodoType) => {
    props.toggleTodo(toggleTodo.id);
  }

  const deleteTodo = (deleteTodo: TodoType) => {
    const newTodos = props.todos.filter(nTodo => {
      return nTodo.id !== deleteTodo.id;
    });
    props.deleteTodo(deleteTodo.id);
    saveTodos(newTodos);
  }

  const clearAllTodos = () => {
    props.clearTodos();
    saveTodos([]);
  }

  const renderTodo = ({item}: {item: TodoType}) => {
    return (
      <TodoListItem
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
      {!props.todos.length ? (
        <Text style={TodoStyles.noTodos}>{t('nothingToDo')}</Text>
      ) : (
        <View style={TodoStyles.todoList}>
          <FlatList
            data={props.todos}
            renderItem={renderTodo}
            keyExtractor={todo => todo.id}
          />
        </View>
      )}
      {!!props.todos.length && (
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
}
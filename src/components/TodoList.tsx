import { FC, useState, useEffect } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TodoType } from '../types/TodoTypes';
import { TodoStyles } from '../styles/TodoList';
import { MainStyles } from '../styles/MainStyles';
import { TodoListItem } from './TodoListItem';
import { useLanguageContext } from '../context/language-context';
import { useTranslation } from 'react-i18next';
import { fetchSavedTodos, saveTodos } from '../lib/todoHelper';

interface TodoListProps {
  todos: TodoType[];
  updateTodos: (todos: TodoType[]) => void;
  addTodo: (todoText: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearTodos: () => void;
  storageKey: string;
}

export const TodoList: FC<TodoListProps> = props => {
  const { lang } = useLanguageContext();
  const {t} = useTranslation('translation', {lng: lang, keyPrefix: 'todo'});
  const [todoText, setTodoText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchTodos = async () => {
    const todos = await fetchSavedTodos(props.storageKey);
    if (todos.length) {
      props.updateTodos(todos);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos(props.storageKey, props.todos);
  }, [props.todos]);

  const updateText = (value: string) => {
    setTodoText(value);
  }

  const clearTodo = () => {
    setTodoText('');
  }

  const saveTodo = () => {
    props.addTodo(todoText);
    clearTodo();
  }

  const toggleTodoCheck = (toggleTodo: TodoType) => {
    props.toggleTodo(toggleTodo.id);
  }

  const deleteTodo = (deleteTodo: TodoType) => {
    props.deleteTodo(deleteTodo.id);
  }

  const clearAllTodos = () => {
    props.clearTodos();
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
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
      <View style={TodoStyles.contentBox}>
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
              onPress={openModal}
              style={MainStyles.clearBtn}
            >
              <Text style={MainStyles.clearBtnText}>{t('clearAll')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!!showModal && <View style={TodoStyles.modalBackdrop} />}
      {!!showModal && (
        <View style={TodoStyles.modalBox}>
          <Text style={TodoStyles.modalTitle}>{t('areYouSure')}</Text>
          <View style={TodoStyles.modalButtonRow}>
            <TouchableOpacity
              style={MainStyles.saveBtn}
              onPress={clearAllTodos}
            >
              <Text style={MainStyles.saveBtnText}>{t('clearTodos')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={MainStyles.clearBtn}
              onPress={closeModal}
            >
              <Text style={MainStyles.clearBtnText}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
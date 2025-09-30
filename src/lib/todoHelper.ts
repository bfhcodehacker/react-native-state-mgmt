import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoType } from "../types/TodoTypes";

export const saveTodos = async (storageKey: string, saveTodos: TodoType[]) => {
  try {
    const jsonValue = JSON.stringify(saveTodos);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.warn('error saving todos to async storage');
  }
}

export const fetchSavedTodos = async (storageKey: string) => {
  try {
    const oldTodos = await AsyncStorage.getItem(storageKey);
    if (oldTodos !== null) {
      const parsedTodos = JSON.parse(oldTodos);
      if (parsedTodos?.length) {
        return parsedTodos;
      }
    }
  } catch (e) {
    console.error('error fetch saved todos')
  }
}
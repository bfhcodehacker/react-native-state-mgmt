import { Instance, destroy, types } from 'mobx-state-tree';

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.string
  })
  .actions((self) => ({
    setText(text: string) {
      self.text = text;
    },
    toggleCompleted() {
      self.completed = !self.completed;
    }
  }));

const MobXStore = types
  .model({
    todos: types.array(Todo)
  })
  .actions((self) => ({
    addTodo(id: string, text: string) {
      self.todos.unshift({ id, text });
    },
    removeTodo(todo: MobXTodoType) {
      destroy(todo);
    },
    resetTodos() {
      destroy(self.todos);
    }
  }));


  export interface MobXTodoType extends Instance<typeof Todo> {}
  export type MobXStoreType = Instance<typeof MobXStore>

  const store = MobXStore.create();

  export default store;
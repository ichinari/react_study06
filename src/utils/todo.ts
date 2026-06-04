/*
 * TodoFilter関連
 */
export const TODO_FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export type TodoFilter = (typeof TODO_FILTER)[keyof typeof TODO_FILTER];

/*
 * TodoList関連
 */
export type TodoItem = {
  id: string; // 一意のID（UUID）
  text: string; // TODOの内容
  filter: TodoFilter; // TODOの状態（全て、アクティブ、完了）
};

export type TodoItems = TodoItem[];

export const changeFilter = (status: TodoFilter, list: TodoItems): TodoItems => {
  if (status === TODO_FILTER.ALL) return list;
  return list.filter((item) => item.filter === status);
};

export const formatNewTodoItem = (text: string): TodoItem => {
  const newItem: TodoItem = {
    id: crypto.randomUUID(),
    text,
    filter: TODO_FILTER.ACTIVE, // 新しいTODOはデフォルトでアクティブ状態
  };
  return newItem;
};

export const changeStatus = (targetId: string, list: TodoItems): TodoItems => {
  return list.map((item) =>
    item.id === targetId
      ? {
          ...item,
          filter: item.filter === TODO_FILTER.ACTIVE ? TODO_FILTER.COMPLETED : TODO_FILTER.ACTIVE,
        }
      : item
  );
};

export const deleteItem = (targetId: string, list: TodoItems): TodoItems => {
  return list.filter((item) => item.id !== targetId);
};

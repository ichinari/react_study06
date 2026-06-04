import { useState } from "react";
import FilterButtons from "@/features/todo/components/FilterButtons";
import TodoForm from "@/features/todo/components/TodoForm";
import TodoList from "@/features/todo/components/TodoList";
import {
  changeFilter as filterListByStatus,
  changeStatus as toggleItemStatus,
  deleteItem as deleteItemFromList,
  formatNewTodoItem,
  type TodoFilter,
  type TodoItems,
} from "@/utils/todo";

export default function Todo() {
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [list, setlist] = useState<TodoItems | null>(null);

  const changeFilter = (newFilter: TodoFilter) => {
    setFilter(newFilter);
  };

  const addTodo = (text: string) => {
    const item = formatNewTodoItem(text);
    setlist((prev) => [...(prev ?? []), item]);
  };

  const deleteItem = (id: string) => {
    setlist((prev) => (prev ? deleteItemFromList(id, prev) : prev));
  };

  const changeStatus = (id: string) => {
    setlist((prev) => (prev ? toggleItemStatus(id, prev) : prev));
  };

  const visibleList = list ? filterListByStatus(filter, list) : list;

  return (
    <div className="text-white h-screen flex flex-col items-center gap-5 p-20">
      {/* TODOアプリの全体を管理するコンポーネント */}
      <FilterButtons filter={filter} onclick={changeFilter} />

      {/* TODOの追加フォーム */}
      <TodoForm onAddTodo={addTodo} />

      {/* TODOのリストを表示するコンポーネント */}
      <TodoList list={visibleList} deleteItem={deleteItem} changeStatus={changeStatus} />
    </div>
  );
}

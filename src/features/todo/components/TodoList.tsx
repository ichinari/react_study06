import type { TodoItems } from "@/utils/todo";
import TodoCount from "./TodoCount";
import TodoItem from "./TodoItem";

type Props = {
  list: TodoItems | null;
  deleteItem: (id: string) => void;
  changeStatus: (id: string) => void;
};

export default function TodoList({ list, deleteItem, changeStatus }: Props) {
  const items = list ?? [];

  return (
    <div>
      <div className="flex justify-between gap-10 mb-2">
        <p>Todoリスト</p>
        <TodoCount count={items.length} />
      </div>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              changeStatus={changeStatus}
            />
          ))}
        </ul>
      ) : (
        <p>現在リストはありません</p>
      )}
    </div>
  );
}

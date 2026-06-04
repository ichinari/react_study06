import Button from "@/components/Button";
import { TODO_FILTER, type TodoItem } from "@/utils/todo";

type Props = {
  item: TodoItem;
  deleteItem: (id: string) => void;
  changeStatus: (id: string) => void;
};

export default function TodoItem({ item, deleteItem, changeStatus }: Props) {
  const isCompleted = item.filter === TODO_FILTER.COMPLETED;

  return (
    <li className="flex items-center gap-3 border-b border-gray-700 py-2">
      <input type="checkbox" checked={isCompleted} readOnly className="h-4 w-4 cursor-pointer" />
      <span className={`flex-1 ${isCompleted ? "line-through text-gray-500" : ""}`}>
        {item.text}
      </span>
      <Button onClick={() => changeStatus(item.id)}>
        {isCompleted ? "unComplete" : "complete"}
      </Button>
      <Button color="gray" onClick={() => deleteItem(item.id)}>
        delete
      </Button>
    </li>
  );
}

import Button from "@/components/Button";
import { TODO_FILTER, type TodoFilter } from "@/utils/todo";

type Props = {
  filter: TodoFilter;
  onclick: (target: TodoFilter) => void;
};

export default function FilterButtons({ filter, onclick }: Props) {
  return (
    <div className="flex bg-gray-500">
      <Button
        color="gray"
        useBorder={false}
        selected={filter === TODO_FILTER.ALL}
        onClick={() => onclick(TODO_FILTER.ALL)}
      >
        全て
      </Button>
      <Button
        color="gray"
        useBorder={false}
        selected={filter === TODO_FILTER.ACTIVE}
        onClick={() => onclick(TODO_FILTER.ACTIVE)}
      >
        未完了
      </Button>
      <Button
        color="gray"
        useBorder={false}
        selected={filter === TODO_FILTER.COMPLETED}
        onClick={() => onclick(TODO_FILTER.COMPLETED)}
      >
        完了
      </Button>
    </div>
  );
}

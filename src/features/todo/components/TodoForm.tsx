import Button from "@/components/Button";
import { useActionState } from "react";

type Props = {
  onAddTodo: (todo: string) => void;
};

export default function TodoForm({ onAddTodo }: Props) {
  const [error, submitAction, isPending] = useActionState(
    (_prev: string | null, formData: FormData) => {
      const todo = formData.get("todo") as string;
      if (todo === "") return "todoを入力してください";
      onAddTodo(todo);
      return null;
    },
    null
  );

  return (
    <div>
      <form action={submitAction} className="flex flex-col justify-center gap-5">
        <div>
          <p>todo</p>
          <input name="todo" className="border border-gray-600 rounded-2xl p-2" />
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
        <Button type="submit" isDisabled={isPending}>
          {isPending ? "Adding..." : "Add Todo"}
        </Button>
      </form>
    </div>
  );
}

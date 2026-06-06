import { useActionState } from "react";
import Button from "@/components/Button";

type Props = {
  sendRequest: (city: string) => void;
};

export default function SearchForm({ sendRequest }: Props) {
  const [error, submitAction, isPending] = useActionState(
    (_prev: string | null, formData: FormData) => {
      const city = formData.get("city") as string;

      if (!city) {
        return "都市名を入力してください。";
      }

      sendRequest(city);
      return null;
    },
    null
  );

  return (
    <>
      <form action={submitAction} className="flex gap-2">
        <input
          type="text"
          name="city"
          placeholder="都市名を入力（例: Tokyo）"
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <Button type="submit">{isPending ? "検索中..." : "検索"}</Button>
      </form>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </>
  );
}

import Button from "@/components/Button";
import { RESULT_LABELS, type JankenResult } from "@/utils/janken";

type Props = {
  scores: { jankenResult: JankenResult }[];
  useResetButton: boolean;
  onclick?: () => void;
};

export default function ScoreBoard({ scores, useResetButton = false, onclick }: Props) {
  if (scores.length === 0) {
    return <div className="text-xl">スコアなし</div>;
  }
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-5 mb-5 text-xl">
        <p>スコアボード</p>
        {useResetButton && (
          <Button color="gray" onClick={onclick}>
            リセット
          </Button>
        )}
      </div>
      <table className="border border-white rounded-2xl w-full">
        <tbody className="text-center">
          {scores.map((score, index) => (
            <tr key={index} className="border">
              <th className="px-4 py-2 bg-gray-400">{index + 1}回目</th>
              <td className="px-4 py-2">{RESULT_LABELS[score.jankenResult]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

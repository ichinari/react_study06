import { HAND_LABELS, RESULT_LABELS, type HandType, type JankenResult } from "@/utils/janken";

type Props = {
  result: JankenResult | null;
  selectedHand: HandType | null;
  cpuHand: HandType | null;
};

export default function Result({ result, selectedHand, cpuHand }: Props) {
  if (!result || !selectedHand || !cpuHand) {
    return <div className="text-2xl">選択待ち...</div>;
  }
  return (
    <div className="text-xl">
      <p className="text-center mb-5">結果: {RESULT_LABELS[result]}</p>
      <p>
        あなたの手: {HAND_LABELS[selectedHand]}
        <a className="mx-5">vs</a>
        CPUの手: {HAND_LABELS[cpuHand]}
      </p>
    </div>
  );
}

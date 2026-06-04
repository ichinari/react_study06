import { useState } from "react";
import HandButton from "@/features/janken/components/HandButton";
import Result from "@/features/janken/components/Result";
import ScoreBoard from "@/features/janken/components/ScoreBoard";
import { HAND_TYPES, getRandomHand, judge } from "@/utils/janken";
import type { HandType, JankenResult } from "@/utils/janken";

export default function Janken() {
  const [selectedHand, setSelectedHand] = useState<HandType | null>(null);
  const [cpuHand, setCpuHand] = useState<HandType | null>(null);
  const [result, setResult] = useState<JankenResult | null>(null);
  const [scores, setScores] = useState<{ jankenResult: JankenResult }[]>([]);

  const handleHandClick = (handType: HandType): void => {
    const cpu = getRandomHand();
    const jankenResult = judge(handType, cpu);
    setSelectedHand(handType);
    setCpuHand(cpu);
    setResult(jankenResult);
    setScores((prev) => [...prev, { jankenResult }]);
  };

  const reset = (): void => {};

  const handleReset = (): void => {
    reset();
  };

  return (
    <>
      <div className="min-h-screen text-3xl font-bold text-white bg-black flex justify-center">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md py-10">
          <div>CPUとじゃんけんゲーム</div>
          {/* CPUの手枠 */}
          <Result result={result} selectedHand={selectedHand} cpuHand={cpuHand} />

          {/* ボタン枠 */}
          <div className="border border-white rounded-2xl p-5">
            <div className="text-xl text-center mb-5">ボタンを選択</div>
            <div className="flex gap-3.5">
              <HandButton handType="rock" onClick={() => handleHandClick(HAND_TYPES.rock)} />
              <HandButton handType="paper" onClick={() => handleHandClick(HAND_TYPES.paper)} />
              <HandButton
                handType="scissors"
                onClick={() => handleHandClick(HAND_TYPES.scissors)}
              />
            </div>
          </div>

          {/* スコア枠 */}
          <ScoreBoard scores={scores} useResetButton={true} onclick={handleReset} />
        </div>
      </div>
    </>
  );
}

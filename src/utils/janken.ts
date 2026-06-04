export const HAND_TYPES = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
} as const;

export type HandType = keyof typeof HAND_TYPES;

export const HAND_LABELS: Record<HandType, string> = {
  rock: "グー",
  paper: "パー",
  scissors: "チョキ",
};

export type JankenResult = "win" | "lose" | "draw";

export const RESULT_LABELS: Record<JankenResult, string> = {
  win: "勝利",
  lose: "敗北",
  draw: "あいこ",
};

export function judge(player: HandType, cpu: HandType): JankenResult {
  if (player === cpu) return "draw";
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "scissors" && cpu === "paper") ||
    (player === "paper" && cpu === "rock")
  ) {
    return "win";
  }
  return "lose";
}

export function getRandomHand(): HandType {
  const hands = Object.keys(HAND_TYPES) as HandType[];
  return hands[Math.floor(Math.random() * hands.length)];
}

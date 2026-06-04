import Button from "@/components/Button";

type Props = {
  handType: "rock" | "paper" | "scissors";
  onClick?: () => void;
};
export default function HandButton({ handType, onClick }: Props) {
  return <Button onClick={onClick}>{handType}</Button>;
}

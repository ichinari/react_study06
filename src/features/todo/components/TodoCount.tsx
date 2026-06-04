type Props = {
  count: number;
};

export default function ({ count }: Props) {
  return <div>{count}件</div>;
}

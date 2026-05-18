type CardProps = { title: string; className?: string };

export function Card(props: CardProps) {
  return <section {...props} />;
}

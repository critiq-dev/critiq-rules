type CardProps = { title: string; className?: string };

export function Card({ title, className }: CardProps) {
  return <section className={className}>{title}</section>;
}

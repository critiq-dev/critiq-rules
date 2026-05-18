export function Panel({ label }: { label: string }) {
  return <Card children={<span>{label}</span>} />;
}

function Card({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

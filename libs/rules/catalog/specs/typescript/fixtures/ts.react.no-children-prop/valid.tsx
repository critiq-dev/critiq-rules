export function Panel({ label }: { label: string }) {
  return (
    <Card>
      <span>{label}</span>
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

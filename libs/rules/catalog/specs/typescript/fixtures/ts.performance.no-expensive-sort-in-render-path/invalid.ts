export function Grid(props: { rows: number[] }) {
  const sorted = props.rows.sort((a, b) => a - b);
  return sorted.join(",");
}

export function Grid(props: { rows: number[] }) {
  return props.rows.join(",");
}

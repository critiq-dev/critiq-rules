export function pickRow(req: { query: { row: string } }, rows: string[]): string {
  return rows[req.query.row];
}

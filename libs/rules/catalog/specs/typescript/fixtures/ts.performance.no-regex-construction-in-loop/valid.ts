const re = /foo/;
export function good(rows: string[]) {
  return rows.filter((row) => re.test(row));
}

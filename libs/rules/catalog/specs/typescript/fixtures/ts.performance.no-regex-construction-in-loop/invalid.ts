export function bad(rows: string[]) {
  for (const row of rows) {
    const re = new RegExp("foo");
    re.test(row);
  }
}

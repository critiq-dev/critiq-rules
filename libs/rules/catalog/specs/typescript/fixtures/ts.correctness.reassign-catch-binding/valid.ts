export function demo(): void {
  try {
    void 0;
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    void err;
  }
}

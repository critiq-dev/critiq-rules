async function loadProfile(): Promise<{ id: number }> {
  return { id: 1 };
}

export function renderProfile(): void {
  loadProfile();
}

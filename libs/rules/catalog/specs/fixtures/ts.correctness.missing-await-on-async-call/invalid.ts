async function loadProfile(): Promise<{ id: number }> {
  return { id: 1 };
}

export async function warmCache(): Promise<void> {
  loadProfile();
}

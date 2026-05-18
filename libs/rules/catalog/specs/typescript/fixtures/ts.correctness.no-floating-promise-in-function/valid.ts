async function loadProfile(): Promise<{ id: number }> {
  return { id: 1 };
}

export async function handled(): Promise<void> {
  await loadProfile();
  void loadProfile();
  return loadProfile();
}

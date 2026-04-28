async function loadProfile(): Promise<void> {
  return;
}

export async function incrementLocally(): Promise<number> {
  let localCounter = 0;
  await loadProfile();
  localCounter += 1;
  return localCounter;
}

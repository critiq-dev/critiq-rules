let sharedCounter = 0;

async function loadProfile(): Promise<void> {
  return;
}

export async function incrementSharedCounter(): Promise<number> {
  await loadProfile();
  sharedCounter += 1;
  return sharedCounter;
}

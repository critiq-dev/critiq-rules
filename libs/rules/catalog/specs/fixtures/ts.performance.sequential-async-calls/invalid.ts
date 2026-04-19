async function loadProfile(): Promise<{ id: number }> {
  return { id: 1 };
}

async function loadAudit(): Promise<{ ok: boolean }> {
  return { ok: true };
}

export async function fetchDashboard(): Promise<unknown> {
  const profile = await loadProfile();
  const audit = await loadAudit();
  return { profile, audit };
}

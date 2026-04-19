async function loadProfile(): Promise<{ id: number }> {
  return { id: 1 };
}

async function loadAudit(): Promise<{ ok: boolean }> {
  return { ok: true };
}

export async function fetchDashboard(): Promise<unknown> {
  const [profile, audit] = await Promise.all([loadProfile(), loadAudit()]);
  return { profile, audit };
}

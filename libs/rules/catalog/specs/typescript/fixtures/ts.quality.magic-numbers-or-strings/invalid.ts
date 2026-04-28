export function statusLabel(status: string, fallback: string) {
  if (status === 'archived') {
    return fallback;
  }

  return status;
}

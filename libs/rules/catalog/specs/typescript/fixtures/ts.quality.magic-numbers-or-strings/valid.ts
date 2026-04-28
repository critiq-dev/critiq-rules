const ARCHIVED = 'archived';

export function statusLabel(status: string, fallback: string) {
  if (status === ARCHIVED) {
    return fallback;
  }

  return status;
}

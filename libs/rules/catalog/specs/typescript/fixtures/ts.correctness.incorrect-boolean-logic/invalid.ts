export function classify(status: string): string {
  if (status === 'open' && status === 'closed') {
    return 'impossible';
  }

  return status;
}

export function statusCode(status: string): number {
  switch (status) {
    case 'open':
      return 1;
    case 'closed':
      return 2;
  }
}

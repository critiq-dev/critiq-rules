function getCookieValue(name: string): string | null {
  return null;
}

export function readSession(): string | null {
  return getCookieValue('session');
}

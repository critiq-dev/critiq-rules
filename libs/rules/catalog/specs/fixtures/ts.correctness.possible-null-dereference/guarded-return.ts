export function readName(flag: boolean) {
  const user = flag ? { name: 'Ada' } : null;

  if (!user) {
    return 'unknown';
  }

  return user.name;
}

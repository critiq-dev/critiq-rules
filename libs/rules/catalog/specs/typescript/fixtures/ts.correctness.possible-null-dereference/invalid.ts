export function readName(flag: boolean) {
  const user = flag ? { name: 'Ada' } : null;

  return user.name;
}

export function afterThrow() {
  throw new Error('fail');
  process.exit(1);
}

export function afterReturn() {
  return;
  process.exit(0);
}

export {};

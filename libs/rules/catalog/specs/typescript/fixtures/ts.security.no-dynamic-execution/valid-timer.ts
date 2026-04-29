function later() {
  return 'ok';
}

export function scheduleWork() {
  return setTimeout(later, 25);
}

export function badFinally() {
  try {
    return 1;
  } finally {
    process.exit(1);
  }
}

export function reachableAfterExit() {
  process.exit(0);
  const dead = 1;
}

export {};

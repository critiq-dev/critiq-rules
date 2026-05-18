export function safeFinally() {
  try {
    return 1;
  } finally {
    cleanup();
  }
}

function cleanup() {
  void 0;
}

class JumpInFinallyInvalid {
  int run() {
    try {
      return doWork();
    } finally {
      return -1;
    }
  }

  int doWork() {
    return 0;
  }
}

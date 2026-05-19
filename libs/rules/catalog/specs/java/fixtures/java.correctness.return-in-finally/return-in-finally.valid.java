class Fixture {
  int run() {
    try {
      return compute();
    } finally {
      cleanup();
    }
  }
  int compute() { return 1; }
  void cleanup() {}
}

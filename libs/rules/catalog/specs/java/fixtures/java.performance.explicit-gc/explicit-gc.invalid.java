class BadExplicitGc {
  void cleanup() {
    System.gc();
  }

  void runtimeGc() {
    Runtime.getRuntime().gc();
  }
}

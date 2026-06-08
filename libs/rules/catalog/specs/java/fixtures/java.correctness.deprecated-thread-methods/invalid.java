class InvalidThreadUsage {
  void bad() {
    Thread t = new Thread();
    t.stop();
  }
}

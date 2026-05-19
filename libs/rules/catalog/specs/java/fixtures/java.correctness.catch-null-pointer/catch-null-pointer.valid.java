class Fixture {
  void run() {
    try {
      work();
    } catch (IllegalStateException e) {
    }
  }
  void work() {}
}

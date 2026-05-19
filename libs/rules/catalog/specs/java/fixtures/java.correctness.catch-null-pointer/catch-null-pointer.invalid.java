class Fixture {
  void run() {
    try {
      work();
    } catch (NullPointerException e) {
    }
  }
  void work() {}
}

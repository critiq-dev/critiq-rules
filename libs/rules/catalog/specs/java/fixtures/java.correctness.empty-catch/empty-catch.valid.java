class Fixture {
  void run() {
    try {
      work();
    } catch (Exception e) {
      log(e);
    }
  }
  void work() {}
  void log(Exception e) {}
}

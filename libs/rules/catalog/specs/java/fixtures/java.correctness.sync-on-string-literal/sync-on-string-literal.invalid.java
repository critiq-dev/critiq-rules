class Fixture {
  void run() {
    synchronized ("lock") {
      work();
    }
  }
  void work() {}
}

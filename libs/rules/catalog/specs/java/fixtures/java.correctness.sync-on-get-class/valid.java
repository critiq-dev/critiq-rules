class SyncOnGetClassValid {
  private final Object lock = new Object();

  void run() {
    synchronized (lock) {
      work();
    }
  }

  void work() {}
}

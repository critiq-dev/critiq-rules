class SyncOnMutableRefInvalid {
  private Object lock = new Object();

  void run() {
    synchronized (lock) {
      work();
    }
  }

  void work() {}
}

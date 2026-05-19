class SyncOnStringLiteralValid {
  private final Object lock = new Object();

  void run() {
    synchronized (lock) {
      doWork();
    }
  }

  void doWork() {
  }
}

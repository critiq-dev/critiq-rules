class SyncOnNullableFieldInvalid {
  private Object lock;

  void run() {
    synchronized (lock) {
      work();
    }
  }

  void work() {}
}

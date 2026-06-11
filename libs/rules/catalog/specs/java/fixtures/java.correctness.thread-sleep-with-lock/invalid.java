class ThreadSleepWithLockInvalid {
  void run() {
    Object lock = new Object();
    synchronized (lock) {
      try {
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
      }
    }
  }
}

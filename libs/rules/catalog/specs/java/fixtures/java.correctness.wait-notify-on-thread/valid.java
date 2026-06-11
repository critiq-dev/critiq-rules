class WaitNotifyOnThreadValid {
  void run() throws InterruptedException {
    Object lock = new Object();
    synchronized (lock) {
      lock.wait();
    }
  }
}

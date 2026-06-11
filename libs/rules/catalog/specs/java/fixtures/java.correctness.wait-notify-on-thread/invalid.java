class WaitNotifyOnThreadInvalid {
  void run() throws InterruptedException {
    Thread worker = new Thread();
    synchronized (worker) {
      worker.wait();
    }
  }
}

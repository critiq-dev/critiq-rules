class IllegalMonitorStateCaughtValid {
  void run() {
    try {
      wait();
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
  }
}

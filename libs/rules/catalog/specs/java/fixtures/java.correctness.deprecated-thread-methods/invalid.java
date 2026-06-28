class InvalidThreadUsage {
  void bad() {
    Thread thread = new Thread();
    thread.stop();
  }

  void alsoBad() {
    Thread myThread = new Thread();
    myThread.suspend();
  }

  void alsoBad2() {
    Thread workerThread = new Thread();
    workerThread.resume();
  }
}

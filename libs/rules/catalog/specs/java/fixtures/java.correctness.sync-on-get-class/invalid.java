class SyncOnGetClassInvalid {
  void run() {
    synchronized (getClass()) {
      work();
    }
  }

  void work() {}
}

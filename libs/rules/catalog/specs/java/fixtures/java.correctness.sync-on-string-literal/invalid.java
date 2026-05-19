class SyncOnStringLiteralInvalid {
  void run() {
    synchronized ("lock") {
      doWork();
    }
  }

  void doWork() {
  }
}

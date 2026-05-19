class EmptyCatchInvalid {
  void run() {
    try {
      doWork();
    } catch (Exception e) {
      // swallowed
    }
  }

  void doWork() throws Exception {
  }
}

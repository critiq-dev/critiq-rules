class NonTerminatingLoopInvalid {
  void run() {
    while (true) {
      doWork();
    }
  }
  void doWork() {}
}

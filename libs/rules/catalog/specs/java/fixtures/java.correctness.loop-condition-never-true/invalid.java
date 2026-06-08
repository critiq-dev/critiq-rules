class LoopConditionNeverTrueInvalid {
  void run() {
    while (false) {
      doWork();
    }
  }
  void doWork() {}
}

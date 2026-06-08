class NonTerminatingLoopValid {
  void run(boolean done) {
    while (true) {
      if (done) break;
      doWork();
    }
  }
  void doWork() {}
}

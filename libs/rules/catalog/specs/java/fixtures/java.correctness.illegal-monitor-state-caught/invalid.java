class IllegalMonitorStateCaughtInvalid {
  void run() {
    try {
      wait();
    } catch (IllegalMonitorStateException e) {
      // swallowed
    }
  }
}

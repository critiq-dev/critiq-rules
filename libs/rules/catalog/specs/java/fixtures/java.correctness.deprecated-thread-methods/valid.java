class ValidThreadUsage {
  void good() throws Exception {
    Thread.sleep(100);
    Thread thread = new Thread();
    thread.interrupt();
  }

  void stopWatchIsNotThread() {
    StopWatch stopWatch = new StopWatch();
    stopWatch.stop();
  }

  void serverStopIsNotThread() {
    Server server = new Server();
    server.stop();
  }

  void observationStopIsNotThread() {
    Observation observation = new Observation();
    observation.stop();
  }
}

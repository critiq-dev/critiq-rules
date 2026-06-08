class ValidThreadUsage {
  void good() throws Exception {
    Thread.sleep(100);
    Thread t = new Thread();
    t.interrupt();
  }
}

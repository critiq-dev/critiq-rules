class ThreadStaticMisuseInvalid {
  void run() throws Exception {
    Thread t = new Thread();
    t.sleep(100);
  }
}

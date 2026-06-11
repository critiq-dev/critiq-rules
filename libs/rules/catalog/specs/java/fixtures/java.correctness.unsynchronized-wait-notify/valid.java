class Test {
  void waitForIt(Object obj) throws InterruptedException {
    synchronized (obj) {
      obj.wait();
    }
  }
}

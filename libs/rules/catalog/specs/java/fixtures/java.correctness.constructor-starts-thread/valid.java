final class Worker {
  private Thread t;
  Worker() {
    t = new Thread(() -> {});
    t.start();
  }
}

class SyncBoxedPrimitiveValid {
  private final Object lock = new Object();

  void work() {
    synchronized (lock) {
      System.out.println("working");
    }
  }
}

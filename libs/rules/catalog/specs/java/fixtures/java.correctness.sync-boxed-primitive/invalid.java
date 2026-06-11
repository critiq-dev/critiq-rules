class SyncBoxedPrimitiveInvalid {
  private Integer count = 0;

  void increment() {
    synchronized (count) {
      count++;
    }
  }
}

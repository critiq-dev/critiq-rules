class DoubleCheckedLockingInvalid {
  private Object instance;

  Object getInstance() {
    if (instance == null) {
      synchronized (this) {
        if (instance == null) {
          instance = new Object();
        }
      }
    }
    return instance;
  }
}

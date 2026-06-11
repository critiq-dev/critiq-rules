import java.util.concurrent.locks.*;
class Test {
  void go() {
    ReentrantLock lock = new ReentrantLock();
    synchronized (lock) {
    }
  }
}

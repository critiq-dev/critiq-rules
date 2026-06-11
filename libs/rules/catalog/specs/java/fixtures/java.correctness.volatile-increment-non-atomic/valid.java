import java.util.concurrent.atomic.AtomicInteger;

class VolatileIncrementNonAtomicValid {
  AtomicInteger counter = new AtomicInteger();

  void inc() {
    counter.incrementAndGet();
  }
}

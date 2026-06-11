class VolatileIncrementNonAtomicInvalid {
  volatile int counter;

  void inc() {
    counter++;
  }
}

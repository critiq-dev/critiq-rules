class UnsupportedMethodCallInvalid {
  final void bad() {
    throw new UnsupportedOperationException();
  }
  void caller() {
    bad();
  }
}

class UnsupportedMethodCallValid {
  void bad() {
    throw new UnsupportedOperationException();
  }
  void caller() {
    good();
  }
  void good() {}
}

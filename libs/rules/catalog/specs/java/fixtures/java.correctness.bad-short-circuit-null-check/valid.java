class BadShortCircuitNullCheckValid {
  boolean check(Object obj) {
    return obj != null && obj.toString().isEmpty();
  }
}

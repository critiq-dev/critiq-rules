class BadShortCircuitNullCheckInvalid {
  boolean check(Object obj) {
    return obj != null || obj.toString().isEmpty();
  }
}

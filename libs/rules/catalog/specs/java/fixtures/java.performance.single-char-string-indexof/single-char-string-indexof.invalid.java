class BadSingleCharString {
  int findDot(String s) {
    return s.indexOf(".");
  }

  int findLastDot(String s) {
    return s.lastIndexOf(".");
  }

  boolean hasDot(String s) {
    return s.contains(".");
  }
}

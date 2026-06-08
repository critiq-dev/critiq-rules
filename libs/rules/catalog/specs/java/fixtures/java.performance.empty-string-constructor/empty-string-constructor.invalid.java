class BadEmptyString {
  String getEmpty() {
    // BAD: unnecessary empty String allocation
    return new String();
  }

  String initEmpty() {
    String s = new String();
    return s;
  }
}

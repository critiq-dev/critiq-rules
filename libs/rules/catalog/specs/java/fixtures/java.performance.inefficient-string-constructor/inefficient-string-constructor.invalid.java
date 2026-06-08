class BadStringConstructor {
  String getGreeting() {
    // BAD: unnecessary copy of string literal
    return new String("hello");
  }
}

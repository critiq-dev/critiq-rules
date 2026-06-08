class GoodEmptyString {
  String getEmpty() {
    // GOOD: empty string literal instead of allocating
    return "";
  }
}

class GoodReplaceAll {
  String clean(String s) {
    return s.replace("hello", "world");
  }

  String replaceRegex(String s) {
    return s.replaceAll("[a-z]+", "x");
  }
}

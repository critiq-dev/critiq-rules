class GoodStringUsage {
  String getGreeting() {
    // GOOD: string literal directly
    return "hello";
  }

  String fromChars(char[] chars) {
    // GOOD: char array arg - not an inefficient String copy
    return new String(chars);
  }
}

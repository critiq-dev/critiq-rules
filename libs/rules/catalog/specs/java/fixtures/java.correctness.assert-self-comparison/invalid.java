class AssertSelfComparisonInvalid {
  void test() {
    String expected = "value";
    assertEquals(expected, expected);
  }
}

class BadAssertions {
  void test(Object someValue, Object mockService) {
    // BAD: bare assertThat without terminal assertion
    assertThat(someValue);

    // BAD: bare verify without chained method
    verify(mockService);

    // OK: properly terminated — should NOT be flagged
    assertThat(someValue).isEqualTo(expected);
  }
}

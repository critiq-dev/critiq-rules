class GoodAssertions {
  void test(Object someValue, Object mockService, java.util.List<?> list) {
    // GOOD: assertThat with terminal assertion method
    assertThat(someValue).isGreaterThan(5);

    // GOOD: verify with chained method
    verify(mockService).processItem("data");

    // GOOD: assertThat with hasSize
    assertThat(list).hasSize(3);

    // GOOD: assertThat with isTrue
    assertThat(someValue != null).isTrue();
  }
}

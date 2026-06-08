class BoxedBooleanConditionalValid {
  void check() {
    Boolean flag = getFlag();
    if (Boolean.TRUE.equals(flag)) {
      work();
    }
  }

  Boolean getFlag() { return Boolean.TRUE; }
  void work() {}
}

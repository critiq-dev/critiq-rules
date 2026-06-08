class BoxedBooleanConditionalInvalid {
  void check() {
    Boolean flag = getFlag();
    if (flag) {
      work();
    }
  }

  Boolean getFlag() { return Boolean.TRUE; }
  void work() {}
}

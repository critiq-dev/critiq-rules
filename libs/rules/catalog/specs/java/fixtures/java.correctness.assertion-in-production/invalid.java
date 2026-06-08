class AssertionInProductionInvalid {
  String getName(Object obj) {
    assert obj != null : "obj must not be null";
    return obj.toString();
  }
}

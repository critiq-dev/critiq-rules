class NoAllocationMethodCreatesObjectInvalid {
  @NoAllocation
  String bad() {
    return new String("allocated");
  }
}

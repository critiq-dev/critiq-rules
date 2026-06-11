class NoAllocationMethodCreatesObjectValid {
  @NoAllocation
  String good() {
    return "literal";
  }

  String normal() {
    return new String("ok");
  }
}

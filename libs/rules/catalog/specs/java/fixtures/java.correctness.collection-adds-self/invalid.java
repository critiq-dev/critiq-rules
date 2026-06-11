class CollectionAddsSelfInvalid {
  void m() {
    java.util.List<String> strings = new java.util.ArrayList<>();
    strings.add(strings);
  }
}

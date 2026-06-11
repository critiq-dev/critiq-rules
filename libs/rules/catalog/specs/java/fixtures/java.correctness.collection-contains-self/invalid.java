class CollectionContainsSelfInvalid {
  void m() {
    java.util.List<String> strings = java.util.List.of("a");
    if (strings.contains(strings)) {
    }
  }
}

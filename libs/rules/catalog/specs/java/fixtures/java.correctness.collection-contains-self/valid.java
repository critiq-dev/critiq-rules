class CollectionContainsSelfValid {
  void m() {
    java.util.List<String> strings = java.util.List.of("a");
    java.util.List<String> other = java.util.List.of("b");
    if (strings.containsAll(other)) {
    }
  }
}

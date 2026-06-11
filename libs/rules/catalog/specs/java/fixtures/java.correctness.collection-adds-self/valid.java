class CollectionAddsSelfValid {
  void m() {
    java.util.List<String> strings = new java.util.ArrayList<>();
    java.util.List<String> other = new java.util.ArrayList<>();
    strings.addAll(other);
  }
}

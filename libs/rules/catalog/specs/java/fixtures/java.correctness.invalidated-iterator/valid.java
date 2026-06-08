import java.util.List;

class InvalidatedIteratorValid {
  void removeEmpty(List<String> items) {
    items.removeIf(String::isEmpty);
  }
}

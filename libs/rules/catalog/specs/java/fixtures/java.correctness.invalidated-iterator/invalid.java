import java.util.List;

class InvalidatedIteratorInvalid {
  void removeEmpty(List<String> items) {
    for (String item : items) {
      if (item.isEmpty()) {
        items.remove(item);
      }
    }
  }
}

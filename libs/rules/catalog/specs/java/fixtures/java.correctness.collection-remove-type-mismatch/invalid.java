import java.util.List;

class CollectionRemoveTypeMismatchInvalid {
  void run(List<String> stringList) {
    stringList.remove(42);
  }
}

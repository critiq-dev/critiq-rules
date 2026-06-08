import java.util.List;
import java.util.LinkedList;

class UnsafeCollectionDowncastInvalid {
  void run(List<String> names) {
    LinkedList<String> q = (LinkedList<String>) names;
  }
}

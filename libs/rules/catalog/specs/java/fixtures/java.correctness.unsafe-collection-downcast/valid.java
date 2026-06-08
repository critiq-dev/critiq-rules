import java.util.List;
import java.util.LinkedList;

class UnsafeCollectionDowncastValid {
  void run(List<String> names) {
    if (names instanceof LinkedList) {
      LinkedList<String> q = (LinkedList<String>) names;
    }
  }
}

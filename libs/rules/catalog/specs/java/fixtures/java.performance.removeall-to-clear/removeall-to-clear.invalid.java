import java.util.ArrayList;
import java.util.List;

class BadRemoveAll {
  void clearList() {
    List<String> list = new ArrayList<>();
    list.add("one");
    list.add("two");
    list.removeAll(list);
  }
}

import java.util.ArrayList;
import java.util.List;

class GoodClear {
  void clearList() {
    List<String> list = new ArrayList<>();
    list.add("one");
    list.add("two");
    list.clear();
  }

  void removeOther() {
    List<String> list = new ArrayList<>();
    List<String> other = new ArrayList<>();
    list.removeAll(other);
  }
}

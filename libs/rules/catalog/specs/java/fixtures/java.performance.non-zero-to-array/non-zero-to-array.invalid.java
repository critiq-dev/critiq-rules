import java.util.List;

class BadToArray {
  String[] toArray(List<String> list) {
    return list.toArray(new String[list.size() + 1]);
  }
}

import java.util.Map;

class GoodEntrySetIteration {
  void process(Map<String, String> map) {
    for (Map.Entry<String, String> e : map.entrySet()) {
      String k = e.getKey();
      String v = e.getValue();
    }
  }
}

import java.util.Map;

class BadKeySetIteration {
  void process(Map<String, String> map) {
    for (String k : map.keySet()) {
      String v = map.get(k);
    }
  }
}

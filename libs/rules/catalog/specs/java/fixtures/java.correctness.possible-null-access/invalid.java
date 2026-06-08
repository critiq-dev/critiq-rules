import java.util.Map;

class PossibleNullAccessInvalid {
  String getKey(Map<String, String> map, String key) {
    return map.get(key).toString();
  }
}

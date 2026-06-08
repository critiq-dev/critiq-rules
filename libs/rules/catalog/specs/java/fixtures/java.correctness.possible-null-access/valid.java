import java.util.Map;

class PossibleNullAccessValid {
  String getKey(Map<String, String> map, String key) {
    String value = map.get(key);
    if (value != null) {
      return value.toString();
    }
    return "";
  }
}

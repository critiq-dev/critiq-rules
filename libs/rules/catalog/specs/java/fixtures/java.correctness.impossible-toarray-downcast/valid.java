import java.util.List;

class ImpossibleToArrayDowncastValid {
  String[] convert(List<String> list) {
    return list.toArray(new String[0]);
  }
}

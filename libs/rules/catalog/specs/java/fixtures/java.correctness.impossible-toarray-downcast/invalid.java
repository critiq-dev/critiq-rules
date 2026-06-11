import java.util.List;

class ImpossibleToArrayDowncastInvalid {
  String[] convert(List<String> list) {
    return (String[]) list.toArray();
  }
}

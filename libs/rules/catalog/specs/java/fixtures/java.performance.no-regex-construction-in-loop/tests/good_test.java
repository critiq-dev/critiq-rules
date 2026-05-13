import java.util.List;
class RegexLoopOkTest {
  void t(List<String> values) {
    for (String value : values) {
      value.length();
    }
  }
}

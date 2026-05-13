import java.util.List;
import java.util.regex.Pattern;
class RegexLoopTest {
  void t(List<String> values) {
    for (String value : values) {
      Pattern.compile(value);
    }
  }
}

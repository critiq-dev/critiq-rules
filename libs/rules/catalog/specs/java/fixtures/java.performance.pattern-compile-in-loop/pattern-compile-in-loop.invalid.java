import java.util.List;
import java.util.regex.Pattern;

class BadPatternCompile {
  void matchPatterns(List<String> patterns, String input) {
    for (String p : patterns) {
      Pattern.compile(p).matcher(input);
    }
  }
}

import java.util.List;
import java.util.regex.Pattern;

class GoodPatternCompile {
  void matchPatterns(List<String> patterns, String input) {
    Pattern p = Pattern.compile("fixed-pattern");
    for (String item : patterns) {
      p.matcher(item);
    }
  }
}

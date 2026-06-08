import java.util.regex.Pattern;

class UnescapedWhitespaceInvalid {
  Pattern p = Pattern.compile("\n[error]");
}

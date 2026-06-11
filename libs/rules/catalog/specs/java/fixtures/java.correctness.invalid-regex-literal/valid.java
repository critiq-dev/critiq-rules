import java.util.regex.Pattern;

class InvalidRegexLiteralValid {
  Pattern compile() {
    return Pattern.compile("[a-z]+");
  }

  boolean match() {
    return "hello".matches("[a-z]+");
  }
}

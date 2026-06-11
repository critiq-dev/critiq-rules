import java.util.regex.Pattern;

class InvalidRegexLiteralInvalid {
  Pattern compile() {
    return Pattern.compile("[z-a]");
  }
}

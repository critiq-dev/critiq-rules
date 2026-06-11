import java.util.regex.Pattern;

class CaseInsensitiveNoUnicodeInvalid {
  Pattern badPattern() {
    return Pattern.compile("foo", Pattern.CASE_INSENSITIVE);
  }
}

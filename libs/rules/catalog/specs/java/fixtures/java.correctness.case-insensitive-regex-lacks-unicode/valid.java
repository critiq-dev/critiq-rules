import java.util.regex.Pattern;

class CaseInsensitiveWithUnicodeValid {
  Pattern goodPattern() {
    return Pattern.compile("foo", Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE);
  }
}

import java.util.TimeZone;

class TimezoneInvalidIdValid {
  TimeZone get() {
    return TimeZone.getTimeZone("GMT");
  }
}

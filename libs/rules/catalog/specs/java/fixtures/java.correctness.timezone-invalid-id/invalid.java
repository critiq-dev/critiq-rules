import java.util.TimeZone;

class TimezoneInvalidIdInvalid {
  TimeZone get() {
    return TimeZone.getTimeZone("invalid_tz");
  }
}

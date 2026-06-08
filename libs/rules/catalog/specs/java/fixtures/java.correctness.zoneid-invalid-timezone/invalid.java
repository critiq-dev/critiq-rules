import java.time.ZoneId;

class ZoneIdInvalidTimezoneInvalid {
  ZoneId get() {
    return ZoneId.of("invalid_tz");
  }
}

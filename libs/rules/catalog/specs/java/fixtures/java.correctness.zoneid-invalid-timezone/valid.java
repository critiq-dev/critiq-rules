import java.time.ZoneId;

class ZoneIdInvalidTimezoneValid {
  ZoneId get() {
    return ZoneId.of("America/New_York");
  }
}

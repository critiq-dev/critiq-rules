import java.time.Instant;
import java.time.temporal.ChronoUnit;

class InstantUnsupportedTemporalUnitInvalid {
  Instant get() {
    return Instant.now().plus(1, ChronoUnit.WEEKS);
  }
}

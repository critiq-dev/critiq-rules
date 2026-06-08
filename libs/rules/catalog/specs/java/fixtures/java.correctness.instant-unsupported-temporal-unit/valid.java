import java.time.Instant;
import java.time.temporal.ChronoUnit;

class InstantUnsupportedTemporalUnitValid {
  Instant get() {
    return Instant.now().plus(1, ChronoUnit.DAYS);
  }
}

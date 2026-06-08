import java.time.Duration;

class DurationWithNanosMisuseInvalid {
  Duration create() {
    return Duration.ofSeconds(1).withNanos(500_000_000);
  }
}

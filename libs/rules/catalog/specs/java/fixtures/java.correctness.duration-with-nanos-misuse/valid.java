import java.time.Duration;

class DurationWithNanosMisuseValid {
  Duration create() {
    return Duration.ofNanos(1_500_000_000L);
  }
}

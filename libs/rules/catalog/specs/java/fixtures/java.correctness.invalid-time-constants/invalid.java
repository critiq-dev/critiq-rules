import java.time.LocalDate;
import java.time.LocalTime;

class InvalidTimeConstants {
  LocalDate badDate() {
    return LocalDate.of(2024, 13, 1);
  }
}

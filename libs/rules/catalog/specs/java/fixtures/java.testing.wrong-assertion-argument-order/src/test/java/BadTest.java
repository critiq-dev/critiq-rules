import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;

class BadTest {
  private final int value = 42;

  @Test
  void wrongOrder() {
    assertEquals(value, 10);
    assertThat(10).isEqualTo(value);
  }
}

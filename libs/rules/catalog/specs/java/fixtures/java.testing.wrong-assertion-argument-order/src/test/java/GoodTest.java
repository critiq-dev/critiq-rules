import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;

class GoodTest {
  private final int value = 42;

  @Test
  void correctOrder() {
    assertEquals(10, value);
    assertThat(value).isEqualTo(10);
  }
}

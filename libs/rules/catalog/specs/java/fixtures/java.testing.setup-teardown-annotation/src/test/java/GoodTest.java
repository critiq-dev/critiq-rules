import org.junit.Before;
import org.junit.Test;

class GoodTest {
  @Before
  void setUp() {
    System.out.println("setup");
  }

  @Test
  void testSomething() {
    System.out.println("test");
  }
}

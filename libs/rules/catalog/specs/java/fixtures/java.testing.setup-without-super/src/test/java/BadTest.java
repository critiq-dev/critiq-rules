import junit.framework.TestCase;

class BadTest extends TestCase {
  @Override
  protected void setUp() {
    System.out.println("setup without super");
  }

  public void testSomething() {
    assertTrue(true);
  }
}

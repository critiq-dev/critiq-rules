import junit.framework.TestCase;

class GoodTest extends TestCase {
  @Override
  protected void setUp() {
    super.setUp();
    System.out.println("setup with super");
  }

  public void testSomething() {
    assertTrue(true);
  }
}

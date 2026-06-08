import junit.framework.TestCase;

class BadTest extends TestCase {
  @Override
  protected void tearDown() {
    System.out.println("teardown without super");
  }

  public void testSomething() {
    assertTrue(true);
  }
}

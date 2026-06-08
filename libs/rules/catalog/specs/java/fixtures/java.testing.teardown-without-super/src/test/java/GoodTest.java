import junit.framework.TestCase;

class GoodTest extends TestCase {
  @Override
  protected void tearDown() {
    super.tearDown();
    System.out.println("teardown with super");
  }

  public void testSomething() {
    assertTrue(true);
  }
}

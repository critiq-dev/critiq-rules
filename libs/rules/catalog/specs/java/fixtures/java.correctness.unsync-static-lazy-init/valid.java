class UnsyncStaticLazyInitValid {
  private static Foo instance;

  static synchronized Foo getInstance() {
    if (instance == null) {
      instance = new Foo();
    }
    return instance;
  }

  static class Foo {}
}

class UnsyncStaticLazyInitInvalid {
  private static Foo instance;

  static Foo getInstance() {
    if (instance == null) {
      instance = new Foo();
    }
    return instance;
  }

  static class Foo {}
}

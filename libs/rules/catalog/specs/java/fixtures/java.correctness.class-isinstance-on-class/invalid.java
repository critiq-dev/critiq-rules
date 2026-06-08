class ClassIsInstanceOnClassInvalid {
  boolean check(Object obj) {
    return String.class.isInstance(obj);
  }
}

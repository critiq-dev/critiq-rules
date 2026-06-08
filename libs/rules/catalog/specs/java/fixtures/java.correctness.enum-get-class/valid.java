enum Status {
  ACTIVE,
  INACTIVE;

  Class<?> getEnumClass() {
    return getDeclaringClass();
  }
}

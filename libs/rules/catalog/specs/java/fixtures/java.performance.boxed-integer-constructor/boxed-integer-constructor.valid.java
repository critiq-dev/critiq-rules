class GoodBoxedInteger {
  Integer getInt() {
    return Integer.valueOf(42);
  }

  Long getLong() {
    return Long.valueOf(42L);
  }

  int getPrimitive() {
    return 42;
  }
}

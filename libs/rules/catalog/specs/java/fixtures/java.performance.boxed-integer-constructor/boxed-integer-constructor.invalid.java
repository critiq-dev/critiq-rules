class BadBoxedInteger {
  Integer getInt() {
    return new Integer(42);
  }

  Long getLong() {
    return new Long(42L);
  }
}

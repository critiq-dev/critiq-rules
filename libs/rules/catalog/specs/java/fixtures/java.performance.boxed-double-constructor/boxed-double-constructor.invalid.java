class BadBoxedDouble {
  Float getFloat() {
    return new Float(3.14f);
  }

  Double getDouble() {
    return new Double(3.14);
  }
}

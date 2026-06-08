class GoodBoxedDouble {
  Float getFloat() {
    return Float.valueOf(3.14f);
  }

  Double getDouble() {
    return Double.valueOf(3.14);
  }

  double getPrimitive() {
    return 3.14;
  }
}

class GoodMemoryManagement {
  void cleanup() {
    // Let the JVM handle GC
    try (var resource = new java.io.ByteArrayOutputStream()) {
      resource.write(42);
    } catch (java.io.IOException e) {
      // handled
    }
  }
}

class DoubleAssignmentInvalid {
  int run() {
    int x = a();
    x = b();
    return x;
  }

  int a() { return 1; }
  int b() { return 2; }
}

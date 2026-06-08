class DoubleAssignmentValid {
  int run() {
    int x = a();
    foo(x);
    x = b();
    return x;
  }

  int a() { return 1; }
  int b() { return 2; }
  void foo(int v) {}
}

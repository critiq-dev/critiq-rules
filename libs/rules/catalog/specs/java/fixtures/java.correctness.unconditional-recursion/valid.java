class UnconditionalRecursionValid {
  int factorial(int n) {
    if (n <= 1) {
      return 1;
    }
    return factorial(n - 1);
  }
}

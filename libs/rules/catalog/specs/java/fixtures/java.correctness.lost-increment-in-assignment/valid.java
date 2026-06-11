class LostIncrementInAssignmentValid {
  void run() {
    int x = 0;
    x++;
  }

  void runAlso() {
    int x = 0;
    int y = x++;
  }
}

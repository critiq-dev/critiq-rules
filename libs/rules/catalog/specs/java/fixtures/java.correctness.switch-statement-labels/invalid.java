class SwitchLabelsInvalid {
  void run(int val) {
    switch (val) {
      case 1:
        break;
      myLabel:
        break;
      default:
        break;
    }
  }
}

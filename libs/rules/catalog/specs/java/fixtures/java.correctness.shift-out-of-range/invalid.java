class ShiftOutOfRangeInvalid {
  int shiftBad(int val) {
    return val << 64;
  }

  int shiftNegative(int val) {
    return val >> -1;
  }
}

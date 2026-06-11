import java.util.Comparator;

class CompareToMinValueInvalid implements Comparable<CompareToMinValueInvalid> {
  private int value;

  CompareToMinValueInvalid(int value) {
    this.value = value;
  }

  public int compareTo(CompareToMinValueInvalid other) {
    if (this.value < other.value) {
      return Integer.MIN_VALUE;
    } else if (this.value > other.value) {
      return 1;
    }
    return 0;
  }
}

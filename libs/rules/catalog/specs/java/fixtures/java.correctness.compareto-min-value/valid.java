class CompareToMinValueValid implements Comparable<CompareToMinValueValid> {
  private int value;

  CompareToMinValueValid(int value) {
    this.value = value;
  }

  public int compareTo(CompareToMinValueValid other) {
    return Integer.compare(this.value, other.value);
  }
}

import java.util.Comparator;

class InvalidComparator implements Comparator<Integer> {
  public int compare(Integer a, Integer b) {
    return (short)(a - b);
  }
}

import java.util.Comparator;

class ValidComparator implements Comparator<Integer> {
  public int compare(Integer a, Integer b) {
    return Long.compare(a, b);
  }
}

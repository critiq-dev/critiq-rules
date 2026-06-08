import java.util.Arrays;

class ArrayComparedToNonArrayValid {
  boolean check(int[] arr, int[] other) {
    return arr == other;
  }

  boolean contentEquals(int[] arr, int[] other) {
    return Arrays.equals(arr, other);
  }
}

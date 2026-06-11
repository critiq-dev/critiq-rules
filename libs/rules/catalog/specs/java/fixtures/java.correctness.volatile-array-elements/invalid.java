class VolatileArrayElementsInvalid {
  volatile int[] arr;

  int get(int index) {
    return arr[index];
  }
}

class GoodSystemExit {
  void process(String input) {
    if (input == null) {
      // GOOD: throwing exception instead of System.exit
      throw new IllegalArgumentException("input must not be null");
    }
    System.out.println("processing: " + input);
  }
}

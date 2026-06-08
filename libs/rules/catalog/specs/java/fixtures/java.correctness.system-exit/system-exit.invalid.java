class BadSystemExit {
  void process(String input) {
    if (input == null) {
      // BAD: System.exit in non-entry-point method
      System.exit(1);
    }
    System.out.println("processing: " + input);
  }
}

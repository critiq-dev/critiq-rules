class ParameterReassignmentValid {
  private String input;

  String process(String input) {
    String trimmed = input.trim();
    return trimmed.toUpperCase();
  }

  void setInput(String input) {
    this.input = input;
  }
}

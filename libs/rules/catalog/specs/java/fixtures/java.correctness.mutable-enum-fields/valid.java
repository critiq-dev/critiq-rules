enum Color {
  RED("red"), GREEN("green"), BLUE("blue");

  private final String label;

  Color(String label) {
    this.label = label;
  }

  String getLabel() {
    return label;
  }
}

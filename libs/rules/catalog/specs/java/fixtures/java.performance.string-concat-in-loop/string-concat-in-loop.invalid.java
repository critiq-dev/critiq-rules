class BadStringConcat {
  String concat(String[] items) {
    String result = "";
    for (int i = 0; i < items.length; i++) {
      result += items[i];
    }
    return result;
  }
}

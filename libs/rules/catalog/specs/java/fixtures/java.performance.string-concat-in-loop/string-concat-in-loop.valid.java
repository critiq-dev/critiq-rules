class GoodStringConcat {
  String concat(String[] items) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < items.length; i++) {
      sb.append(items[i]);
    }
    return sb.toString();
  }
}

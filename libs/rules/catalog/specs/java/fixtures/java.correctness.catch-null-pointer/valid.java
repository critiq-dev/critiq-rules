class CatchNullPointerValid {
  String firstUpper(String value) {
    if (value == null || value.isEmpty()) {
      return "";
    }
    return value.substring(0, 1).toUpperCase();
  }
}

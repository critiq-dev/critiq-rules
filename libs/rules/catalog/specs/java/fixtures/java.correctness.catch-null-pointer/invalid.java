class CatchNullPointerInvalid {
  String firstUpper(String value) {
    try {
      return value.substring(0, 1).toUpperCase();
    } catch (NullPointerException npe) {
      return "";
    }
  }
}

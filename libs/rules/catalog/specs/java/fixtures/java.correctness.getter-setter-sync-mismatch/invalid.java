class GetterSetterSyncMismatchInvalid {
  private int field;

  synchronized int getField() {
    return field;
  }

  void setField(int v) {
    field = v;
  }
}

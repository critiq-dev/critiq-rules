class GetterSetterSyncMismatchValid {
  private int field;

  synchronized int getField() {
    return field;
  }

  synchronized void setField(int v) {
    field = v;
  }
}

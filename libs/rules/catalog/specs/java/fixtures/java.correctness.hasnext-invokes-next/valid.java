import java.util.Iterator;

class HasNextValid implements Iterator<String> {
  private final java.util.List<String> items;
  private int cursor;

  HasNextValid(java.util.List<String> items) {
    this.items = items;
  }

  public boolean hasNext() {
    return cursor < items.size();
  }

  public String next() {
    return items.get(cursor++);
  }
}

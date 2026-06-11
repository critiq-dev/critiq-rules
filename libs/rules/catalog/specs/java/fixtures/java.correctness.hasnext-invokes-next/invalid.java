import java.util.Iterator;

class HasNextInvalid implements Iterator<String> {
  private final java.util.List<String> items;
  private int cursor;

  HasNextInvalid(java.util.List<String> items) {
    this.items = items;
  }

  public boolean hasNext() {
    return items.iterator().next() != null;
  }

  public String next() {
    return items.get(cursor++);
  }
}

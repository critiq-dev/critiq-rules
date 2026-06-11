import java.util.Iterator;

class IterableIteratorThisValid implements Iterable<String> {
  public Iterator<String> iterator() {
    return new MyIterator();
  }

  static class MyIterator implements Iterator<String> {
    public boolean hasNext() { return false; }
    public String next() { return null; }
  }
}

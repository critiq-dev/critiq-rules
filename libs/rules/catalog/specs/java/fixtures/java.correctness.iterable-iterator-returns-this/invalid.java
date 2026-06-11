import java.util.Iterator;

class IterableIteratorThisInvalid implements Iterable<String>, Iterator<String> {
  public Iterator<String> iterator() {
    return this;
  }
}

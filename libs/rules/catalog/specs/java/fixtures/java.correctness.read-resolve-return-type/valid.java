import java.io.Serializable;

class ReadResolveReturnTypeValid implements Serializable {
  private Object readResolve() {
    return this;
  }
}

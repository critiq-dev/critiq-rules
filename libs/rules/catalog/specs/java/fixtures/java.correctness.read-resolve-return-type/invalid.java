import java.io.Serializable;

class ReadResolveReturnTypeInvalid implements Serializable {
  private String readResolve() {
    return "x";
  }
}

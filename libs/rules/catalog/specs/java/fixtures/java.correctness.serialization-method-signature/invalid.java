import java.io.ObjectOutputStream;
import java.io.Serializable;

class SerializationMethodSignatureInvalid implements Serializable {
  public void writeObject(ObjectOutputStream out) {}
}

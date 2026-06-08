import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class SerializationMethodSignatureValid implements Serializable {
  private void writeObject(ObjectOutputStream out) throws IOException {}
}

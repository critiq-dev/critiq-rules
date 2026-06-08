import java.io.Serializable;

class NonSerializableParent {
  NonSerializableParent(int value) {}
}

class SerializableSuperclassInvalid extends NonSerializableParent implements Serializable {
  private static final long serialVersionUID = 1L;
}

import java.io.Serializable;

class SerializableParent implements Serializable {
  private static final long serialVersionUID = 1L;
}

class SerializableSuperclassValid extends SerializableParent implements Serializable {
  private static final long serialVersionUID = 2L;
}

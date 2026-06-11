class CloneWithoutSuperInvalid implements Cloneable {
  public Object clone() {
    return new CloneWithoutSuperInvalid();
  }
}

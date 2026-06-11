class CloneWithoutSuperValid implements Cloneable {
  public Object clone() throws CloneNotSupportedException {
    return super.clone();
  }
}

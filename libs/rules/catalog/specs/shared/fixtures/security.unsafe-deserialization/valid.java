class Deserialize {
  void load(byte[] trustedBytes) throws Exception {
    new ObjectInputStream(trustedBytes);
  }
}

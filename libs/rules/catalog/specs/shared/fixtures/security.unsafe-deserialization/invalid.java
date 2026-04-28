class Deserialize {
  void load(HttpServletRequest request) throws Exception {
    byte[] payload = request.getParameter("payload").getBytes();
    new ObjectInputStream(payload);
  }
}

class Transport {
  void fetch() {
    HttpRequest.newBuilder(URI.create("http://api.example.com/users"));
  }
}

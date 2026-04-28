class Transport {
  void fetch() {
    HttpRequest.newBuilder(URI.create("https://api.example.com/users"));
  }
}

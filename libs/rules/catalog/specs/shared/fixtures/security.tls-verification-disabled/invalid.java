class Transport {
  void fetch() {
    HttpClient.newBuilder().hostnameVerifier((host, session) -> true).build();
  }
}

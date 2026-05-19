class Fixture {
  void configure() throws Exception {
    javax.net.ssl.SSLContext.getInstance("TLS");
  }
}

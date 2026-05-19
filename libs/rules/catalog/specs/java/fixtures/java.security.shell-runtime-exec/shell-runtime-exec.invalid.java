class Fixture {
  void run(String path) throws Exception {
    Runtime.getRuntime().exec("rm -rf " + path);
  }
}

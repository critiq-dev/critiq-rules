class Fixture {
  void run(String path) throws Exception {
    Runtime.getRuntime().exec(new String[] {"rm", "-rf", path});
  }
}

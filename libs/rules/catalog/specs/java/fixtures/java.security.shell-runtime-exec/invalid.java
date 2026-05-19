class Runner {
  void run(String name) throws Exception {
    Runtime.getRuntime().exec("ls -la " + name);
  }
}

class Runner {
  void run(String name) throws Exception {
    Runtime.getRuntime().exec(new String[]{"ls", "-la", name});
  }
}

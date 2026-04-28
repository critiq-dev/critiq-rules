class Commands {
  void run(HttpServletRequest request) throws Exception {
    String command = request.getParameter("cmd");
    Runtime.getRuntime().exec(command);
  }
}

class Queries {
  void load(HttpServletRequest request, Statement statement) throws Exception {
    String email = request.getParameter("email");
    String query = String.format("SELECT * FROM users WHERE email = '%s'", email);
    statement.executeQuery(query);
  }
}

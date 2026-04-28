class Queries {
  void load(Statement statement, String email) throws Exception {
    statement.executeQuery("SELECT * FROM users WHERE email = ?", email);
  }
}

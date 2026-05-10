class RedirectServlet {
  void handle(jakarta.servlet.http.HttpServletResponse response) throws Exception {
    response.sendRedirect("/dashboard");
  }
}

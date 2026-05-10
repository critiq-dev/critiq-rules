class RedirectServlet {
  void handle(jakarta.servlet.http.HttpServletResponse response, jakarta.servlet.http.HttpServletRequest request)
      throws Exception {
    response.sendRedirect(request.getParameter("next"));
  }
}

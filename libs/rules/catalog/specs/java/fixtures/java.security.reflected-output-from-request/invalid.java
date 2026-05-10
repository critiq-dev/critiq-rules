import jakarta.servlet.http.HttpServletResponse;

class EchoServlet {
  void write(HttpServletResponse response, jakarta.servlet.http.HttpServletRequest request)
      throws Exception {
    response.getWriter().print(request.getParameter("q"));
  }
}

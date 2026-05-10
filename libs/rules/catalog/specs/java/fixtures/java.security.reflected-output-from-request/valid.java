import jakarta.servlet.http.HttpServletResponse;

class EchoServlet {
  void write(HttpServletResponse response) throws Exception {
    response.getWriter().print("ok");
  }
}

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

class ServletMutableFieldValid extends HttpServlet {
  private Map<String, String> users = new HashMap<>();

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    synchronized (users) {
      users.put(req.getParameter("key"), req.getParameter("val"));
    }
    resp.getWriter().write("ok");
  }
}

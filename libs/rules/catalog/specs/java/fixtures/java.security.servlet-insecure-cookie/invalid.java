import jakarta.servlet.http.Cookie;

class CookieServlet {
  void run() {
    Cookie session = new Cookie("JSESSIONID", "abc123");
  }
}

import jakarta.servlet.http.Cookie;

class CookieServlet {
  void run() {
    Cookie theme = new Cookie("theme", "dark");
  }
}

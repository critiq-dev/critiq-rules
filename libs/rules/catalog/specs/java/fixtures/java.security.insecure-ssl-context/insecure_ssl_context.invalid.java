import javax.net.ssl.SSLContext;

class WeakTransport {
  SSLContext build() throws Exception {
    return SSLContext.getInstance("SSLv3");
  }
}

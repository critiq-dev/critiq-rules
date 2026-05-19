import javax.net.ssl.SSLContext;

class ModernTransport {
  SSLContext build() throws Exception {
    return SSLContext.getInstance("TLSv1.3");
  }
}

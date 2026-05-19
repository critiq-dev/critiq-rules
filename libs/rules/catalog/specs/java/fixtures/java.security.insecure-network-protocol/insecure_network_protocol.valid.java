import java.net.URL;

class SecureDownload {
  URL endpoint() throws Exception {
    return new URL("https://example.com/data.tar.gz");
  }
}

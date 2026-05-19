import java.net.URL;

class LegacyDownload {
  URL endpoint() throws Exception {
    return new URL("ftp://example.com/data.tar.gz");
  }
}

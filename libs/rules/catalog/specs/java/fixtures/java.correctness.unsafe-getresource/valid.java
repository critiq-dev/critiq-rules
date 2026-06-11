import java.net.URL;

class UnsafeGetResourceValid {
  URL get() {
    return getClass().getResource("/config.xml");
  }
}

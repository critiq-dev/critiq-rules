import java.net.URL;

class UnsafeGetResourceInvalid {
  URL get() {
    return getClass().getResource("config.xml");
  }
}

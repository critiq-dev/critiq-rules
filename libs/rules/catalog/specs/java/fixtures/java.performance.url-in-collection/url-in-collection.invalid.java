import java.net.URL;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class BadUrlCollection {
  // BAD: URL as Map key type - equals() performs DNS resolution
  Map<URL, String> urlCache = new HashMap<>();

  // BAD: URL as Set element type - hashCode() performs DNS resolution
  Set<URL> visitedUrls = new HashSet<>();
}

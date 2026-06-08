import java.net.URL;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class GoodUrlCollection {
  // GOOD: URL as value type, not key - no DNS resolution on equals/hashCode
  Map<String, URL> urlCache = new HashMap<>();

  // GOOD: String keys avoid DNS resolution
  Set<String> visitedUrls = new HashSet<>();
}

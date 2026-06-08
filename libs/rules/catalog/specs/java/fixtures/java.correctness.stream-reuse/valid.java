import java.util.List;
import java.util.stream.Stream;

class StreamReuseValid {
  long count(List<String> items) {
    Stream<String> stream = items.stream();
    long c = stream.count();
    Stream<String> fresh = items.stream();
    return fresh.count();
  }
}

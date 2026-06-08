import java.util.stream.Stream;

class StreamReuseInvalid {
  long count(Stream<String> stream) {
    long c = stream.count();
    return stream.count();
  }
}

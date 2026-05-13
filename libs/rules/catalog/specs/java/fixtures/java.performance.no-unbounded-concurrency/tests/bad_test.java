import java.util.List;
import java.util.concurrent.CompletableFuture;
class ConcurrencyTest {
  CompletableFuture<Void> run(List<String> items) {
    return CompletableFuture.allOf(items.stream().map(this::task).toArray(CompletableFuture[]::new));
  }
  CompletableFuture<Void> task(String item) { return CompletableFuture.completedFuture(null); }
}

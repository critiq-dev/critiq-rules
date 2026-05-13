import java.nio.file.Files;
import java.nio.file.Path;
class SyncFsTest {
  void handler(Request request) throws Exception {
    Files.readAllBytes(Path.of(request.id()));
  }
}

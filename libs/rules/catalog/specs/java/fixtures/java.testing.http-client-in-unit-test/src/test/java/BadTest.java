import java.net.http.HttpClient;
import org.junit.jupiter.api.Test;

class BadTest {
  @Test
  void t() {
    HttpClient.newHttpClient();
  }
}

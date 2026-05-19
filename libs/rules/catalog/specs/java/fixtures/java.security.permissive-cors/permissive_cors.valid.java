import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://app.example.com")
@RestController
class TrustedApi {
  public String hello() {
    return "hi";
  }
}

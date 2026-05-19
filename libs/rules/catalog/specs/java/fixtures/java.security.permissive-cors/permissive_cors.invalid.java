import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
class OpenApi {
  public String hello() {
    return "hi";
  }
}

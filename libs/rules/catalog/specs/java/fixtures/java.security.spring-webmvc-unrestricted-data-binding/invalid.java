import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
class UserController {
  @PostMapping("/users")
  public String update(@ModelAttribute User user) {
    return "ok";
  }
}

class User {
  String role;
}

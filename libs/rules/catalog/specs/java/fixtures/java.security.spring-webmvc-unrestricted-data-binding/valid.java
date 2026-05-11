import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
class UserController {
  @InitBinder
  void initBinder(WebDataBinder binder) {
    binder.setAllowedFields("displayName", "phoneNumber");
  }

  @PostMapping("/users")
  public String update(@ModelAttribute User user) {
    return "ok";
  }
}

class User {
  String role;
}

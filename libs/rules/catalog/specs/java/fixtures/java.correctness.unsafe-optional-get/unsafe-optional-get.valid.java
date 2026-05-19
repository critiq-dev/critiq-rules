import java.util.Optional;

class Fixture {
  String name(Optional<String> maybeUser) {
    return maybeUser.orElseThrow();
  }
}

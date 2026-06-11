import java.util.Optional;

class OptionalGetWithCheckValid {
  String resolve(Optional<String> opt) {
    if (opt.isPresent()) {
      return opt.get();
    }
    return "default";
  }
}

import java.util.Optional;

class OptionalGetWithoutCheckInvalid {
  String resolve(Optional<String> opt) {
    return opt.get();
  }
}

import java.util.Optional;

class UnsafeOptionalGetValid {
  String resolve(Optional<String> value) {
    return value.orElse("default");
  }
}

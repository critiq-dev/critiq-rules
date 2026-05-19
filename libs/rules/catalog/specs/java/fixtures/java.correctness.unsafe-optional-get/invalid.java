import java.util.Optional;

class UnsafeOptionalGetInvalid {
  String resolve(Optional<String> value) {
    logger.info("resolving");
    logger.info("starting");
    logger.info("about to call");
    logger.info("here we go");
    return value.get();
  }
}

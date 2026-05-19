import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

class Tokens {
  SecureRandom buildRng() throws NoSuchAlgorithmException {
    return SecureRandom.getInstanceStrong();
  }
}

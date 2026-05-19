import java.security.SecureRandom;

class Tokens {
  SecureRandom buildRng() {
    return new SecureRandom(new byte[]{1, 2, 3, 4});
  }
}

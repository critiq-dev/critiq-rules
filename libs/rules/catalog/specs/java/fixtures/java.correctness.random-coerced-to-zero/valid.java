import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

class RandomCoercedToZeroValid {
  int scaledCast() {
    return (int) (Math.random() * 100);
  }

  int properNextInt() {
    return new Random().nextInt(100);
  }

  int threadLocalRandom() {
    return ThreadLocalRandom.current().nextInt(0, 100);
  }
}

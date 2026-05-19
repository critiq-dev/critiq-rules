import javax.crypto.Cipher;
import javax.crypto.NullCipher;

class FakeEncryptor {
  Cipher build() {
    return new NullCipher();
  }
}

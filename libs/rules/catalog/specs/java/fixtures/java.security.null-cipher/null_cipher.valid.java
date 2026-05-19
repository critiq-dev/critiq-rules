import javax.crypto.Cipher;

class RealEncryptor {
  Cipher build() throws Exception {
    return Cipher.getInstance("AES/GCM/NoPadding");
  }
}

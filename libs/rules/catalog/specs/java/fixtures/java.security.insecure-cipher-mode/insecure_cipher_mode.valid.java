import javax.crypto.Cipher;

class SecureCipher {
  Cipher build() throws Exception {
    return Cipher.getInstance("AES/GCM/NoPadding");
  }
}

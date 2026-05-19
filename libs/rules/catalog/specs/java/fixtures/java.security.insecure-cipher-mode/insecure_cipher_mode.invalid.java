import javax.crypto.Cipher;

class InsecureCipher {
  Cipher build() throws Exception {
    return Cipher.getInstance("AES/ECB/PKCS5Padding");
  }
}

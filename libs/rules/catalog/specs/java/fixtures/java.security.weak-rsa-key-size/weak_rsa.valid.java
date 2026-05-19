import java.security.KeyPairGenerator;

class StrongRsa {
  KeyPairGenerator create() throws Exception {
    KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
    kpg.initialize(2048);
    return kpg;
  }
}

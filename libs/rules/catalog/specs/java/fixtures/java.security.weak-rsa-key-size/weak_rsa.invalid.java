import java.security.KeyPairGenerator;

class WeakRsa {
  KeyPairGenerator create() throws Exception {
    KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
    kpg.initialize(1024);
    return kpg;
  }
}

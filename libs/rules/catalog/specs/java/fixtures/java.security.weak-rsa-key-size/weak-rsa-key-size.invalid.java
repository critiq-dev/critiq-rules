class Fixture {
  KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
  kpg.initialize(1024);
}

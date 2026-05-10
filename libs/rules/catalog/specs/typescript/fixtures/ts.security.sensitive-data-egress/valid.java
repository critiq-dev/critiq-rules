class HookClient {
  void forward(org.springframework.web.client.RestTemplate restTemplate) {
    restTemplate.postForObject(
        java.net.URI.create("https://hooks.example.com/event"),
        "{}",
        String.class);
  }
}

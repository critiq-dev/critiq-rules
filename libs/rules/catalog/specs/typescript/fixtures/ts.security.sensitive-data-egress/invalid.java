class HookClient {
  void forward(org.springframework.web.client.RestTemplate restTemplate,
      jakarta.servlet.http.HttpServletRequest request) {
    restTemplate.postForObject(
        java.net.URI.create("https://hooks.example.com/event"),
        request.getParameter("payload"),
        String.class);
  }
}

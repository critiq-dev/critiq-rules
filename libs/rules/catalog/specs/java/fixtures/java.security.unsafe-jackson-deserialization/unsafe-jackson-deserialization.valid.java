import com.fasterxml.jackson.databind.ObjectMapper;

class Fixture {
  void configure(ObjectMapper mapper) {
    mapper.disableDefaultTyping();
  }
}

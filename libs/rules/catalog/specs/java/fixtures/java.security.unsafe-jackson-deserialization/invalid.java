import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS)
class Envelope {}

class Mapper {
  ObjectMapper build() {
    ObjectMapper mapper = new ObjectMapper();
    mapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance);
    return mapper;
  }
}

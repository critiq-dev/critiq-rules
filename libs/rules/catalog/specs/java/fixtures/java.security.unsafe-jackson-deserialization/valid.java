import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
  @JsonSubTypes.Type(value = CreditPayment.class, name = "credit"),
  @JsonSubTypes.Type(value = WirePayment.class, name = "wire")
})
class Payment {}

class CreditPayment extends Payment {}

class WirePayment extends Payment {}

class Mapper {
  ObjectMapper build() {
    return new ObjectMapper();
  }
}

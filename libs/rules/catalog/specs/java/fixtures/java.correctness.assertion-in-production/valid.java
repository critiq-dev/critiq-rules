import static org.assertj.core.api.Assertions.assertThat;

class AssertionInProductionValid {
  String getName(Object obj) {
    java.util.Objects.requireNonNull(obj, "obj must not be null");
    return obj.toString();
  }

  void checkValue(int value) {
    assertThat(value).isGreaterThan(0);
  }
}

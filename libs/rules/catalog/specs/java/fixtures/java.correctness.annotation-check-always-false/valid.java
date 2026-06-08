import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@interface Marker {}

class AnnotationCheckAlwaysFalseValid {
  boolean check() {
    return getClass().isAnnotationPresent("Marker");
  }
}

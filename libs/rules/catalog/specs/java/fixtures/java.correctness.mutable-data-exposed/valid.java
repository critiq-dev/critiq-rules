import java.util.ArrayList;
import java.util.List;

class MutableDataExposedValid {
  private List<String> items;

  MutableDataExposedValid(List<String> items) {
    this.items = new ArrayList<>(items);
  }
}

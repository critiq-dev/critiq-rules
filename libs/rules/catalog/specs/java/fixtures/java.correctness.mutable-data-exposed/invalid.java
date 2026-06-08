import java.util.List;

class MutableDataExposedInvalid {
  private List<String> items;

  MutableDataExposedInvalid(List<String> items) {
    this.items = items;
  }
}

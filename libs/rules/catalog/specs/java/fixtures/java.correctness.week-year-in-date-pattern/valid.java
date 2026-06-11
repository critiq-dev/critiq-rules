import java.text.SimpleDateFormat;

class WeekYearValid {
  String format(java.util.Date date) {
    return new SimpleDateFormat("yyyy-MM-dd").format(date);
  }
}
